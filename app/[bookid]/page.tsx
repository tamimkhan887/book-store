import { notFound } from "next/navigation";
import { iBook } from "../Types/Book.type";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import ReadButton from "../Components/BookDetails/ReadButton";
import WishListButton from "../Components/BookDetails/WishListButton";
const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json")
    const data = await res.json()
    return data;
}
const BookDetails = async ({ params }: { params: Promise<{ bookid: string }> }) => {
    const { bookid } = await params;
    const booksData = await getBooks();
    const book = booksData.find((book: iBook) => book.bookId === parseInt(bookid))
    if (book === undefined) {
        return notFound();
    }
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-10">

                {/* Book Image */}
                <div className="w-full md:w-90 h-107.5 bg-[#F3F3F3] rounded-lg flex items-center justify-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={300}
                        height={380}
                        className="max-h-90 w-auto object-contain"
                    />
                </div>

                {/* Book Information */}
                <div className="flex-1">

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-[#131313]">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-sm text-gray-600 mt-2">
                        By : <span className="font-medium">{book.author}</span>
                    </p>

                    <div className="border-t border-[#1313131A] my-4"></div>

                    {/* Category */}
                    <p className="text-sm font-medium text-gray-500 mb-3">
                        {book.category}
                    </p>

                    {/* Review */}
                    <p className="text-sm leading-6 text-gray-600">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-2 mt-5">
                        <span className="font-semibold text-sm">Tag</span>

                        {book.tags.map((tag:string, index:number) => (
                            <span
                                key={index}
                                className="bg-[#E8F8EE] text-[#23BE5E] px-3 py-1 rounded-full text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="border-t border-[#1313131A] my-5"></div>

                    {/* Book Details */}
                    <div className="space-y-2 text-sm">

                        <div className="flex">
                            <span className="w-40 text-gray-500">
                                Number of Pages:
                            </span>
                            <span className="font-semibold">
                                {book.totalPages}
                            </span>
                        </div>

                        <div className="flex">
                            <span className="w-40 text-gray-500">
                                Publisher:
                            </span>
                            <span className="font-semibold">
                                {book.publisher}
                            </span>
                        </div>

                        <div className="flex">
                            <span className="w-40 text-gray-500">
                                Year of Publishing:
                            </span>
                            <span className="font-semibold">
                                {book.yearOfPublishing}
                            </span>
                        </div>

                        <div className="flex items-center">
                            <span className="w-40 text-gray-500">
                                Rating:
                            </span>

                            <span className="font-semibold flex items-center gap-1">
                                <IoIosStar className="text-yellow-400" />
                                {book.rating}
                            </span>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-6">
                        <ReadButton book={book}></ReadButton>
                        <WishListButton book={book}></WishListButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;