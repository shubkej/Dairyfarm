import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ProductMenu from '../../components/Products/ProductMenu';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <div className='header'>
          <Header />
          {/* <ProductMenu category={category} setcategory={setcategory} />
          <ProductDisplay category={category} /> */}
      
          <Footer/>
    </div>
  );
}

export default Home;
