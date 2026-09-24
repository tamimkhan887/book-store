import { iBook } from "@/app/Types/Book.type";
import booksData from "@/public/booksData.json";
import Book from "./Book";

const getBooks = () => booksData;
const Books = async () => {
    const books = await getBooks()
    return (
        <div>
            <h3 className="text-center text-[#131313] font-bold text-[40px] mt-12">Books</h3>
            <div className="grid grid-cols-3 mt-8 gap-6">
                {
                    books.map((book: iBook, idx: number) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;