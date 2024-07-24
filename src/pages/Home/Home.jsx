import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
// import ProductMenu from '../../components/Products/ProductMenu';
// import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Footer from '../../components/Footer/Footer';
import Header2 from '../../components/Header2/Header2';
import Header3 from '../../components/Header3/Header3';

const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <div className='header'>
      <Header />
      {/* <ProductMenu category={category} setcategory={setcategory} />
          <ProductDisplay category={category} /> */}
      <Header2 />
      <Header3 />
      <Footer />
    </div>
  );
}

export default Home;
