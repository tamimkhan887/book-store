import { iBook } from "@/app/Types/Book.type";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

interface WishListProps {
    sortedWishBooks: iBook[];
}

const WishlistBook = ({ sortedWishBooks }: WishListProps) => {
    return (
        <div className="space-y-3">
            {sortedWishBooks.length > 0 ? (
                sortedWishBooks.map((w) => (
                    <div
                        key={w.bookId}
                        className="w-full rounded-lg border border-[#1313131A] bg-white p-3"
                    >
                        <div className="flex gap-4">
                            {/* Book Image */}
                            <div className="flex h-25 w-20 shrink-0 items-center justify-center rounded-lg bg-[#F3F3F3]">
                                <Image
                                    src={w.image}
                                    alt={w.bookName}
                                    width={65}
                                    height={85}
                                    className="h-21.25 w-auto object-contain"
                                />
                            </div>

                            {/* Book Information */}
                            <div className="flex flex-1 flex-col justify-between">
                                {/* Title & Author */}
                                <div>
                                    <h3 className="text-[14px] font-bold text-[#131313]">
                                        {w.bookName}
                                    </h3>

                                    <p className="mt-1 text-[10px] text-[#13131399]">
                                        By : {w.author}
                                    </p>
                                </div>

                                {/* Tags & Info */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[9px] font-semibold text-[#131313]">
                                        Tag
                                    </span>

                                    {w.tags?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full bg-[#E8F8ED] px-2 py-1 text-[8px] text-[#22A447]"
                                        >
                                            #{tag}
                                        </span>
                                    ))}

                                    <span className="flex items-center gap-1 text-[8px] text-[#13131399]">
                                        <span className="text-[10px]">📅</span>
                                        Year of Publishing{" "}
                                        {w.yearOfPublishing}
                                    </span>
                                </div>

                                {/* Publisher & Pages */}
                                <div className="flex items-center gap-4 text-[8px] text-[#13131399]">
                                    <span>🏢 {w.publisher}</span>
                                    <span>📄 Page {w.totalPages}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-3 flex items-center justify-between border-t border-[#1313131A] pt-2">
                            <div className="flex gap-2">
                                <span className="rounded-full bg-[#EEF5FF] px-3 py-1 text-[8px] text-[#4285F4]">
                                    Category: {w.category}
                                </span>

                                <span className="rounded-full bg-[#FFF3E6] px-3 py-1 text-[8px] text-[#F59E0B]">
                                    Rating: {w.rating}
                                </span>
                            </div>

                            <Link href={`/${w.bookId}`}><button className="flex items-center gap-1 rounded-full bg-[#16A34A] px-3 py-1.5 text-[8px] font-semibold text-white transition hover:bg-[#15803D]">
                                <FaEye size={8} />
                                View Details
                            </button></Link>
                        </div>
                    </div>
                ))
            ) : (
                <h3 className="text-center text-4xl font-bold text-black">
                    No Wishlist Books Found
                </h3>
            )}
        </div>
    );
};

export default WishlistBook;
