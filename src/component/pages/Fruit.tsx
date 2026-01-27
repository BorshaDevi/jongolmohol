'use client'
import ProductCard from "../ProductCard";
import ShareBanner from "../ShareBanner";

const Fruit=()=>{
    return (
        <div>
            <ShareBanner title={"Fruit collection"} text={'Here are various types of Fruit.'} image={'https://res.cloudinary.com/dg1okcxsx/image/upload/v1769254572/top-view-juicy-fruits-such-as-pineapple-colorful-apples-lemons-bowl-with-lemons-isolated-white-wall_adhfkv.jpg'}></ShareBanner>
             <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {fruit.map(f => (
                    <ProductCard
                        id={f.id}
                        key={f.id}
                        image={f.image}
                        name={f.name}
                        price={f.price}
                    />
                ))}
            </div>
        </div>
    )
}
export default Fruit;
const fruit=
[
  { "id": "fr1", "name": "Apple", "image": "/images/fruits/apple.jpg", "category": "fruit", "price": 220 },
  { "id": "fr2", "name": "Banana", "image": "/images/fruits/banana.jpg", "category": "fruit", "price": 60 },
  { "id": "fr3", "name": "Orange", "image": "/images/fruits/orange.jpg", "category": "fruit", "price": 180 },
  { "id": "fr4", "name": "Mango", "image": "/images/fruits/mango.jpg", "category": "fruit", "price": 200 },
  { "id": "fr5", "name": "Grapes", "image": "/images/fruits/grapes.jpg", "category": "fruit", "price": 250 },
  { "id": "fr6", "name": "Pineapple", "image": "/images/fruits/pineapple.jpg", "category": "fruit", "price": 120 },
  { "id": "fr7", "name": "Papaya", "image": "/images/fruits/papaya.jpg", "category": "fruit", "price": 90 },
  { "id": "fr8", "name": "Watermelon", "image": "/images/fruits/watermelon.jpg", "category": "fruit", "price": 70 },
  { "id": "fr9", "name": "Strawberry", "image": "/images/fruits/strawberry.jpg", "category": "fruit", "price": 320 },
  { "id": "fr10", "name": "Guava", "image": "/images/fruits/guava.jpg", "category": "fruit", "price": 100 }
]

