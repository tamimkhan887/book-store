import { iBook } from "@/app/Types/Book.type";
import Image from "next/image";
import Link from "next/link";
import { IoIosStarOutline } from "react-icons/io";
interface bookProps {
    book: iBook
}
const Book = ({ book }: bookProps) => {
    return (
        <Link href={`/${book.bookId}`}>
            <div className="border border-[#13131326] p-8 rounded-2xl">
                <div className="bg-[#F3F3F3] flex items-center justify-center py-8 rounded-2xl">
                    <Image src={book.image} alt="book_Img" width={134} height={166} className="w-auto h-auto" loading="eager"></Image>
                </div>
                <div className="flex gap-4 mt-4">
                    <h4 className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-5 py-2 rounded-3xl">{book.tags[0]}</h4>
                    <h4 className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-5 py-2 rounded-3xl">{book.tags[1]}</h4>
                </div>
                <div className="mt-4 space-y-4">
                    <h3 className="font-bold text-2xl text-[#131313]">{book.bookName}</h3>
                    <p className="text-[#13131399] font-medium">By : {book.author}</p>
                    <hr className="border border-[#13131326] border-dashed" />
                    <div className="flex justify-between">
                        <p className="text-[#131313CC] font-medium">{book.category}</p>
                        <div className="flex gap-2 items-center justify-center">
                            <p className="text-[#131313CC] font-medium ">{book.rating}</p>
                            <IoIosStarOutline color="#424242" size={22} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;