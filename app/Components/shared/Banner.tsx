import Image from "next/image";
import banner from "@/app/assets/hero_img.jpg"
const Banner = () => {
    return (
        <div  className="flex justify-between items-center bg-[#1313130D] p-30 mt-12 rounded-2xl">
            <div className="space-y-10">
                <h3 className="text-[56px] font-bold text-[#131313]">
                    Books to freshen up <br /> your bookshelf
                </h3>
                <button className="bg-[#23BE0A] text-white rounded-lg py-5 px-7 font-bold text-xl">View The List</button>
            </div>
            <div>
                <Image src={banner} alt="Banner Image" loading="eager"></Image>
            </div>
        </div>
    );
};

export default Banner;