"use client"

import { useContext, useState } from "react";
import { Context } from "../Context/ContextProvider";
import { iBook } from "../Types/Book.type";
import ReadBooks from "../Components/shared/ReadBooks";
import WishlistBook from "../Components/shared/WishlistBook";
const ListedBooks = () => {
    const bookProvider = useContext(Context) as {
        read: iBook[]
        wishList: iBook[]

    }
    const { read, wishList } = bookProvider;

    const [sortBy , setSortBy] = useState<"rating" | "pages"| "year">()

    const sortBooks = (books : iBook[]) =>{
        const sortedBooks = [...books]
        if(sortBy === "rating"){
            sortedBooks.sort((a,b) => b.rating - a.rating)
        }else if(sortBy === "pages"){
            sortedBooks.sort((a,b) => b.totalPages - a.totalPages)
        }
        else if(sortBy === "year"){
            sortedBooks.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return sortedBooks
    }

    const sortedReadBooks = sortBooks(read)
    const sortedWishBooks = sortBooks(wishList)
    return (
        <div>
            <div className="mt-8 bg-[#1313130D] py-8 rounded-2xl">
                <h3 className="font-bold text-[28px] text-center">Books</h3>
            </div>
            <div className="text-center my-10">
                <select value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "rating" | "pages"| "year")}
                defaultValue="Sort By" className="select select-info">
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of pages</option>
                    <option value={"year"}>Publisher year</option>
                </select>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books : (${read.length})`} defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10"> <ReadBooks sortedReadBooks={sortedReadBooks}></ReadBooks> </div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label={`WishList Books (${wishList.length})`} />
                <div className="tab-content border-base-300 bg-base-100 p-10"><WishlistBook sortedWishBooks={sortedWishBooks}></WishlistBook></div>
            </div>
        </div>
    );
};

export default ListedBooks;