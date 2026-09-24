"use client"

import { Context } from "@/app/Context/ContextProvider";
import { iBook } from "@/app/Types/Book.type";
import { useContext, type Dispatch, type SetStateAction } from "react";

const ReadButton = ({book}:{book : iBook}) => {
    const bookProvider = useContext(Context) as {
        read: iBook[];
        setRead: Dispatch<SetStateAction<iBook[]>>;
    };
    const { read, setRead } = bookProvider;
    const handleReadBook = () =>{
        const exists = read.find(bk => bk.bookId === book.bookId )
        if (exists) {
            alert("Book ALready Exits In Read List");
        } else {
            setRead([...read, book]);
        }
    }
    return (
        <button onClick={()=>handleReadBook()} className="border border-gray-300 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
            Read
        </button>
    );
};

export default ReadButton;