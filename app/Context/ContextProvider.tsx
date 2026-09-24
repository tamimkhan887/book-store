"use client"
import { createContext, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({children}:{children:React.ReactNode}) => {
    const [read , setRead] = useState([])
    const [wishList , setWishList] = useState([])

    const sharedData = {
        read ,
        setRead ,
        wishList ,
        setWishList
    }
    return (
        <Context.Provider value={sharedData}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;