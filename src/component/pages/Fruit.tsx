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
  { "id": "fr1", "name": "Apple", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769527127/8f16713bc593575ad152ac7f2fcd3e44_peynke.jpg", "category": "fruit", "price": 220 },
  { "id": "fr2", "name": "Banana", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769527241/b62b81f49b6f48b3a87ce2f0c4677b4d_bodxhn.jpg", "category": "fruit", "price": 60 },
  { "id": "fr3", "name": "Orange", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769526844/freepik__talk__46788_bdcd5b.jpg", "category": "fruit", "price": 180 },
  { "id": "fr4", "name": "Mango", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769526988/apricots-basket-wooden-table-side-view_176474-9109_pxmjss.jpg", "category": "fruit", "price": 200 },
  { "id": "fr5", "name": "Grapes", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769527293/9390e6cd144f89705ab95dcb0c60fb41_jen4bu.jpg", "category": "fruit", "price": 250 },
  { "id": "fr6", "name": "Pineapple", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769527376/296949a5c0f83da58ecbb017d796544c_n5omcw.jpg", "category": "fruit", "price": 120 },
  { "id": "fr7", "name": "Papaya", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769527484/7cbf0c68999b1696e2174147eb7e535e_qfxto4.jpg", "category": "fruit", "price": 90 },
  { "id": "fr8", "name": "Watermelon", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769527527/bc53bd86f61b9133cadc8e9ed78a3872_workk4.jpg", "category": "fruit", "price": 70 },
  { "id": "fr9", "name": "Strawberry", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769527613/c1a9d19e69ddec0f7abf34ea9ab865d0_ledar5.jpg", "category": "fruit", "price": 320 },
  { "id": "fr10", "name": "Guava", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769527566/152524978fedc8b5401121e34c2aa5d9_gbksrm.jpg", "category": "fruit", "price": 100 }
]

