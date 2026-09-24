"use client"

import { Context } from "@/app/Context/ContextProvider";
import { iBook } from "@/app/Types/Book.type";
import { useContext, type Dispatch, type SetStateAction } from "react";

const WishListButton = ({ book }: { book: iBook }) => {
    const bookProvider = useContext(Context) as {
        wishList: iBook[];
        setWishList: Dispatch<SetStateAction<iBook[]>>;
    };
    const { wishList , setWishList } = bookProvider;
    const handleWishListBook = () => {
        const exists = wishList.find(bk => bk.bookId === book.bookId)
        if (exists) {
            alert("Book ALready Exits In Read List");
        } else {
            setWishList([...wishList, book]);
        }
    }
    return (
        <button onClick={()=>handleWishListBook()} className="bg-[#23BE5E] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#1da94f]">
            Wishlist
        </button>
    );
};

export default WishListButton;