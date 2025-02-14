import { createContext, useEffect, useState } from 'react';
// import { food_list } from '../assets/assets'
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setcartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFood_list] = useState([]);
    const url = "http://localhost:4000";

    const addTocart = async(itemId) => {
        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{Token}})
            
        }
    }

    const removeCartItems =async (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: {Token } });
        } 
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

    const fetchPoructList = async() => {
        const response = await axios.get(url + "/api/product/list");
        setFood_list(response.data.data);
        
    }

    const loadCartData = async (Token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { Token } });
        setcartItems(response.data.cartData);
    }
    
    useEffect(() => {
        async function loadData() {
            await fetchPoructList();

            if (localStorage.getItem("Token")) {
                setToken(localStorage.getItem("Token"))
                await loadCartData(localStorage.getItem("Token"))
            }
        }
        loadData();

         
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