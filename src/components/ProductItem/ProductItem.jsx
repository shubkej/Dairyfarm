import React, { useContext } from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const ProductItem = ({id,name,price,description,image}) => {

    const { cartItems, addTocart, removeCartItems } = useContext(StoreContext);

    return (
        <div className='product-item'>
            <div className="product-item-image-container">
                <img className='product-item-image' src={image} alt="" />
                {!cartItems[id] ?
                    <img className='add' src={assets.add_icon_white} onClick={() =>addTocart(id)} alt="" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeCartItems(id)} src={assets.remove_icon_red} alt="" />
                        <p>{ cartItems[id]}</p>
                        <img onClick={() => addTocart (id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>

            <div className="product-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{ description}</p>
                <p className="food-item-price">${ price}</p>
            </div>
            
        </div>
    )
}

export default ProductItem