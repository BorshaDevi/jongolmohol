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
  { "id": "n1", "name": "Almonds", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528235/429488c174f3f17a8bb2f3964476388d_zdfian.jpg", "category": "nuts", "price": 850 },
  { "id": "n2", "name": "Cashew Nuts", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528235/429488c174f3f17a8bb2f3964476388d_zdfian.jpg", "category": "nuts", "price": 900 },
  { "id": "n3", "name": "Walnuts", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528326/80b97873ceb838417a49aa3b3f862720_bxvzw8.jpg", "category": "nuts", "price": 780 },
  { "id": "n4", "name": "Pistachio", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528373/f5614364e800901610bc2fc300f2e904_hcutr5.jpg", "category": "nuts", "price": 950 },
  { "id": "n5", "name": "Peanuts", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528456/d4e22e5c4b58198840890266b388b9c6_ontie8.jpg", "category": "nuts", "price": 280 },
  { "id": "n6", "name": "Hazelnuts", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528510/28b5ef91d0bca3ba333a0fc894b4a39e_neraog.jpg", "category": "nuts", "price": 820 },
  { "id": "n7", "name": "Pecan Nuts", "": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528549/2ff1e863753983330ad1a287d68ee719_poklfi.jpg", "category": "nuts", "price": 880 },
  { "id": "n8", "name": "Macadamia", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528603/61d1a00440e3be4ad6d7f7e38652433b_xsayfq.jpg", "category": "nuts", "price": 1100 },
  { "id": "n9", "name": "Brazil Nuts", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528636/0b8f87b084a4d40bde26ad932d70e978_py2naw.jpg", "category": "nuts", "price": 920 },
  { "id": "n10", "name": "Mixed Dry Nuts", "image": "https://res.cloudinary.com/dg1okcxsx/image/upload/v1769528674/34ef416a6a7e3f223ab16af7e8a1eed3_tfdaac.jpg", "category": "nuts", "price": 700 }
]
