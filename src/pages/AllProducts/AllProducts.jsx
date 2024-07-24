import Footer from '../../components/Footer/Footer'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import ProductMenu from '../../components/Products/ProductMenu'
import './allProduct.css'
import React, { useState } from 'react'

const AllProducts = () => {
    const [category, setcategory] = useState("All");

    return (
        <div> 
             
            <ProductMenu category={category} setcategory={setcategory} />
            <ProductDisplay category={category} />
            <Footer />
        </div>
    )
    }

export default AllProducts