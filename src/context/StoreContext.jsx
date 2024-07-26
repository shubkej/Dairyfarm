import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setcartItems] = useState({});
    const [token, setToken] = useState("");

    const url = "http://localhost:4000";

    const addTocart = (itemId) => {
        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeCartItems = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalAmount += iteminfo.price * cartItems[item]; 
            }
        }
        return totalAmount;
    }
    
    useEffect(() => {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))  
            }
    }, [])
    
    const contextValue = {
        food_list,
        cartItems,
        addTocart,
        setcartItems,
        removeCartItems,
        getTotalCartAmount,
        setToken,
        token,
        url,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider