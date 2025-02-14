import React from 'react';
import './ProductMenu.css'
import { menu_list } from '../../assets/assets'


const ProductMenu = ({ category, setcategory }) => {
    return (
        <div className='product-menu' id='product-menu'>

            <h1>Explore Our Products</h1>
            <p className='product-menu-text'>Choose from a diverse menu featuring a delectable array of milk products</p>

            <div className="product-menu-listt">
                {menu_list.map((item,index) => (
                    <div onClick={() => setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="product-menu-listt-item" key={index+1}>
                        <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="" id='proImage' />
                        <p>{item.menu_name}</p>
                    </div> 
                ))}
            </div>

            <hr />

        </div>
    );
}

export default ProductMenu;
