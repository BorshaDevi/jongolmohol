'use client'
import SimpleParallax from "simple-parallax-js";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const Discount = () => {
    return (
        <div className=" px-4 mt-10">
            <h1 className="text-4xl text-center font-bold text-orange-600 underline-offset-auto underline ">
                Discount & offers
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {categories.filter(cate => cate.discount > 0)
                    .map((cate) => (
                        <div key={cate.id}>

                            <Card

                                className="bg-white relative shadow-md hover:shadow-lg transition rounded-xl overflow-hidden border-none "
                            >
                                {/* Image */}
                                <img
                                    src={cate.image}
                                    alt={cate.category}
                                    className="w-full max-h-44 object-cover p-3 rounded-md"
                                />
                                <span className="absolute bg-red-600 gap-1 flex font-bold text-white rounded-md w-fit text-xl px-1 py-1">
                                    <span className="relative -top-1 -left-1 flex size-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex size-3 rounded-full bg-green-600"></span>
                                    </span>
                                    <span >
                                        {cate.discount}% Save
                                    </span>
                                </span>
                                {/* Content */}
                                <CardHeader className="text-center p-4">

                                    <CardTitle className="text-2xl absolute bg-green-800 bottom-32 left-3 right-0 w-80 text-white font-extrabold rounded-md">
                                        <span>off on </span> {cate.category}
                                    </CardTitle>

                                    <button className="btn">
                                        Shop Now
                                    </button>
                                </CardHeader>
                            </Card>

                        </div>

                    ))}
            </div>
        </div>
    )
}
export default Discount



const categories = [
    {
        id: 1,
        category: "Fish",
        discount: 40,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: 2,
        category: "Vegetables",
        discount: 50,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275850/408645018_e4f72981-ae5c-4248-b859-1bce1dd3e773_yqtvab.jpg",
    },
    {
        id: 3,
        category: "Fruits",
        discount: 0,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275717/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_g9alek.jpg",
    },
    {
        id: 4,
        category: "Nuts",
        discount: 10,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767201605/pexels-pixabay-38292_ccpzn0.jpg",
    },
];