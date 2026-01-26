import ProductCard from "../ProductCard";
import ShareBanner from "../ShareBanner";

const Nuts=()=>{
    return (
        <div>
            <ShareBanner title={"Nuts collection"} text={'Here are various types of nuts.'} image={'https://res.cloudinary.com/dg1okcxsx/image/upload/v1769254136/white-small-bowls-filled-with-assortment-nuts_qldqrx.jpg'}></ShareBanner>
             <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {nuts.map(nut => (
                    <ProductCard
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