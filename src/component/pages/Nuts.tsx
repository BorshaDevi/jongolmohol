'use client'
import ProductCard from "../ProductCard";
import ShareBanner from "../ShareBanner";

const Nuts=()=>{
    return (
        <div>
            <ShareBanner title={"Nuts collection"} text={'Here are various types of nuts.'} image={'https://res.cloudinary.com/dg1okcxsx/image/upload/v1769254136/white-small-bowls-filled-with-assortment-nuts_qldqrx.jpg'}></ShareBanner>
             <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {nuts.map(nut => (
                    <ProductCard
                        id={nut.id}
                        key={nut.id}
                        image={nut.image}
                        name={nut.name}
                        price={nut.price}
                    />
                ))}
            </div>
        </div>
    )
}
export default Nuts;


const nuts=
[
  { "id": "n1", "name": "Almonds", "image": "/images/nuts/almonds.jpg", "category": "nuts", "price": 850 },
  { "id": "n2", "name": "Cashew Nuts", "image": "/images/nuts/cashew.jpg", "category": "nuts", "price": 900 },
  { "id": "n3", "name": "Walnuts", "image": "/images/nuts/walnuts.jpg", "category": "nuts", "price": 780 },
  { "id": "n4", "name": "Pistachio", "image": "/images/nuts/pistachio.jpg", "category": "nuts", "price": 950 },
  { "id": "n5", "name": "Peanuts", "image": "/images/nuts/peanuts.jpg", "category": "nuts", "price": 280 },
  { "id": "n6", "name": "Hazelnuts", "image": "/images/nuts/hazelnuts.jpg", "category": "nuts", "price": 820 },
  { "id": "n7", "name": "Pecan Nuts", "image": "/images/nuts/pecan.jpg", "category": "nuts", "price": 880 },
  { "id": "n8", "name": "Macadamia", "image": "/images/nuts/macadamia.jpg", "category": "nuts", "price": 1100 },
  { "id": "n9", "name": "Brazil Nuts", "image": "/images/nuts/brazil.jpg", "category": "nuts", "price": 920 },
  { "id": "n10", "name": "Mixed Dry Nuts", "image": "/images/nuts/mixed.jpg", "category": "nuts", "price": 700 }
]
