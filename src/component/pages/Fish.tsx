'use client'
import ProductCard from "../ProductCard";
import ShareBanner from "../ShareBanner";

const fishList = [
    {
        id: "1",
        name: "Rui Fish",
        price: 350,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: "2",
        name: "Katla Fish",
        price: 400,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: "3",
        name: "Hilsha Fish",
        price: 900,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: "4",
        name: "Hilsha Fish",
        price: 900,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: "5",
        name: "Hilsha Fish",
        price: 900,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: "6",
        name: "Hilsha Fish",
        price: 900,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id:" 7",
        name: "Hilsha Fish",
        price: 900,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: "8",
        name: "Hilsha Fish",
        price: 900,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: "9",
        name: "Hilsha Fish",
        price: 900,
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
]
const Fish = () => {
    return (
        <div>
            <ShareBanner title={"Fish collection"} text={'Here are various types of Fish.'} image={'https://res.cloudinary.com/dg1okcxsx/image/upload/v1769254427/overhead-shot-colorful-koi-fish-gathered-all-together-water_tp4htl.jpg'}></ShareBanner>

            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {fishList.map(fish => (
                    <ProductCard
                        id={fish.id}
                        key={fish.id}
                        image={fish.image}
                        name={fish.name}
                        price={fish.price}
                    />
                ))}
            </div>

        </div>
    )
}
export default Fish;