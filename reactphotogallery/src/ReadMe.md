not: hatalı kodlarımı yorum satırına almayıp silerek yaptığımı bu raporu oluşturuken fark ettim..
not 2: fotoğraf arama sonuçlarında ilk kutudan başlamıyor, onu düzenleyemedim.

file structure için ;
├── src
│ ├── style
│ │ ├── App.css
│ │
│ ├── components
│ │ ├── Photo.js
│ │ ├── Button için ; PageNumberButtons.js
│ │ └── Input için ; SearchKeywords.js
│ └── helpers
│ ├── searchHelper.js
│ └── arrayHelper.js

bu şekilde oluşturdum.

import sorting için :

// Main paketler (React gibi)
import React, { useEffect, useState } from "react";

// Third-party kütüphaneler (Pexels gibi)
import { createClient } from "pexels";

// Kendi projenizde kullanılan bileşenler (components)
import Photo from "./components/Photo";
import SearchKeywords from "./components/searchKeywords";
import PageNumberButtons from "./components/PageNumberButtons";

// Kendi projenizde kullanılan yardımcı fonksiyonlar, servisler ve diğer dosyalar (helpers, utils, services vs.)
import { getPhotos, PER_PAGE } from "./helpers/photoService";
import { getUsers } from "./helpers/dataHelper";

// sabit dosyalar (constants)
import "../src/style/App.css";

kod parçasında bulunan değişkenler ve fonksiyonlar için;
photo ve setPhoto
searchKeywords ve setSearchKeywords: Arama işlemleri için kullanılan değişken.
pageNumber ve setPageNumber: Sayfalama için kullanılan değişken oluşturdum.
Her bir değişken ismi küçük harfle başlıyor ve sonraki her kelimenin baş harfi büyük harfle başlıyor ve camelCase yapısına uygun olarak isimlendirilmiş durumda.

örnek olarak: PageNumberButtons.js sayfasında ;

<!-- import React from "react";

function PageNumberButtons({
  pageNumber,
  increasePageNumber,
  decreasePageNumber,
}) {
  return (
    <div className="pagination">
      <div className="left" onClick={decreasePageNumber}>
        {"<"}
      </div>
      <div className="page-number">Page: {pageNumber}</div>
      <div className="right" onClick={increasePageNumber}>
        {">"}
      </div>
    </div>
  );
}

export default PageNumberButtons; -->

PageNumberButtons bileşeni, pageNumber, increasePageNumber ve decreasePageNumber adlı üç farklı prop almıştır.

Photo.js sayfasında ;
Yeni olarak yapılan değişiklik, modalOpen adında bir state oluşturdum.

  <!-- const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }; -->

helpers => photoServer.js için ;

PER_PAGE sabiti, sayfa başına alınacak fotoğraf sayısını belirlemek için kullanılan bir sabittir. Bu sabit, 20 değerine eşitlenmiştir.

<!-- import { createClient } from "pexels";

const PER_PAGE = 20;
const client = createClient(process.env.React_App_Key);

const getPhotos = async (page) => {
  try {
    const result = await client.photos.curated({
      per_page: PER_PAGE,
      page,
    });
    return result.photos;
  } catch (error) {
    console.error("Error fetching curated photos:", error);
    return [];
  }
};

export { getPhotos, PER_PAGE }; -->

dataHelper.js için ;

<!-- const getUsers = (data) => {
  return data?.filter((item) => item?.status);
};

export { getUsers }; -->
