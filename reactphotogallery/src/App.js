import React, { useEffect, useState } from "react";

import { createClient } from "pexels";

import Photo from "./components/Photo";
import SearchKeyword from "./components/searchKeyword";
import PageNumberButtons from "./components/PageNumberButtons";
import Header from "./components/Header";

import { getPhotos, PER_PAGE } from "./helpers/photoService";

import "../src/style/App.css";

const client = createClient(process.env.React_App_Key);

function App() {
  const [photo, setPhoto] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
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
    const query = searchKeyword;
    try {
      const result = await client.photos.search({
        query,
        per_page: PER_PAGE,
        page: 1,
      });
      setPhoto(result?.photos || []);
    } catch (error) {
      console.error("Error fetching searched photos:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event?.target.value || "");
  };

  return (
    <div>
      <Header />
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
