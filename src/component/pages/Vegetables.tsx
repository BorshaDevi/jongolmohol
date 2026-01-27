'use client'
import ProductCard from "../ProductCard";
import ShareBanner from "../ShareBanner";

const Vegetables=()=>{
    return (
        <div>
            <ShareBanner title={"Vegetables collection"} text={'Here are various types of vegetables.'} image={'https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275850/408645018_e4f72981-ae5c-4248-b859-1bce1dd3e773_yqtvab.jpg'}></ShareBanner>
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {vegetables.map(veg => (
                    <ProductCard
                        id={veg.id}
                        key={veg.id}
                        image={veg.image}
                        name={veg.name}
                        price={veg.price}
                    />
                ))}
            </div>
        </div>
    )
}
export default Vegetables;

const vegetables=
[
  { "id": "v1", "name": "Potato", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525130/delicious-potatoes-white-background_1203-1899_mlbir7.jpg", "category": "vegetable", "price": 50 },
  { "id": "v2", "name": "Carrot", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525232/top-view-arrangement-fresh-carrots_23-2148758821_ppn4ub.jpg", "category": "vegetable", "price": 80 },
  { "id": "v3", "name": "Tomato", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525373/close-up-view-tomatoes-wooden-surface_141793-10773_q43q7t.jpg", "category": "vegetable", "price": 70 },
  { "id": "v4", "name": "Onion", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525373/close-up-view-tomatoes-wooden-surface_141793-10773_q43q7t.jpg", "category": "vegetable", "price": 65 },
  { "id": "v5", "name": "Cabbage", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525373/close-up-view-tomatoes-wooden-surface_141793-10773_q43q7t.jpg", "category": "vegetable", "price": 45 },
  { "id": "v6", "name": "Cauliflower", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525373/close-up-view-tomatoes-wooden-surface_141793-10773_q43q7t.jpg", "category": "vegetable", "price": 60 },
  { "id": "v7", "name": "Spinach", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525373/close-up-view-tomatoes-wooden-surface_141793-10773_q43q7t.jpg", "category": "vegetable", "price": 40 },
  { "id": "v8", "name": "Eggplant", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525130/delicious-potatoes-white-background_1203-1899_mlbir7.jpg", "category": "vegetable", "price": 55 },
  { "id": "v9", "name": "Green Chili", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525130/delicious-potatoes-white-background_1203-1899_mlbir7.jpg", "category": "vegetable", "price": 90 },
  { "id": "v10", "name": "Cucumber", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769525232/top-view-arrangement-fresh-carrots_23-2148758821_ppn4ub.jpg", "category": "vegetable", "price": 50 }
]
