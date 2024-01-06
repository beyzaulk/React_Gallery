import React, { useEffect, useState } from "react";

import { createClient } from "pexels";

import Photo from "./components/Photo";
import SearchKeywords from "./components/searchKeywords";
import PageNumberButtons from "./components/PageNumberButtons";

import { getPhotos, PER_PAGE } from "./helpers/photoService";
import { getUsers } from "./helpers/dataHelper";

import "../src/style/App.css";

const client = createClient(process.env.React_App_Key);

function App() {
  const [photo, setPhoto] = useState([]);
  const [searchKeywords, setSearchKeywords] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchCuratedPhotos = async () => {
      try {
        const photos = await getPhotos({ page: pageNumber });
        setPhoto(photos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchCuratedPhotos();
  }, [pageNumber]);

  // Arama fonks.
  const searchByValue = async () => {
    setPageNumber(1);
    const query = searchKeywords;
    try {
      const result = await client.photos.search({
        query,
        per_page: PER_PAGE,
        page: 1,
      });
      setPhoto(result.photos);
    } catch (error) {
      console.error("Error fetching searched photos:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchKeywords(event.target.value);
  };

  return (
    <div>
      <header>
        <SearchKeywords
          value={searchKeywords}
          onChange={handleSearchChange}
          onSearch={searchByValue}
        />
        <button disabled={!searchKeywords} onClick={searchByValue}>
          Search
        </button>
      </header>
      <div className="photobody" id="photobody">
        <PageNumberButtons
          pageNumber={pageNumber}
          increasePageNumber={increasePageNumber}
          decreasePageNumber={decreasePageNumber}
        />
        {photo?.map((item) => (
          <Photo
            key={item.id}
            src={item.src.landscape}
            photographer={item.photographer}
          />
        ))}
        <a href="#photobody"></a>
      </div>
    </div>
  );
}

export default App;
