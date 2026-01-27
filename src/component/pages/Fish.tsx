'use client'
import ProductCard from "../ProductCard";
import ShareBanner from "../ShareBanner";


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
const fishList= 
[
  { "id": "f1", "name": "Rui Fish", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 350 },
  { "id": "f2", "name": "Hilsa Fish", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 1200 },
  { "id": "f3", "name": "Katla Fish", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 420 },
  { "id": "f4", "name": "Tilapia", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 260 },
  { "id": "f5", "name": "Pangash Fish", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 220 },
  { "id": "f6", "name": "Koi Fish", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 300 },
  { "id": "f7", "name": "Bhetki Fish", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 680 },
  { "id": "f8", "name": "Shrimp", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 750 },
  { "id": "f9", "name": "Pomfret", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 900 },
  { "id": "f10", "name": "Boal Fish", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg", "category": "fish", "price": 520 }
]
