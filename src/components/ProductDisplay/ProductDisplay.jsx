import React, { useContext } from 'react';
import './ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import ProductItem from '../ProductItem/ProductItem';
import RazorpayPayment from '../Rasorpay/RazorpayPayment';

const ProductDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)

    return (
        <div className='productDisplay' id='productDisplay'>
            <h2>Top Dairy Product near you</h2>
            <div className="product-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <ProductItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                    }
                })}
            </div>
            {/* <RazorpayPayment /> */}
        </div>
    );
}

export default ProductDisplay;
