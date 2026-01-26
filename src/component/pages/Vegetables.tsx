import ProductCard from "../ProductCard";
import ShareBanner from "../ShareBanner";

const Vegetables=()=>{
    return (
        <div>
            <ShareBanner title={"Vegetables collection"} text={'Here are various types of vegetables.'} image={'https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275850/408645018_e4f72981-ae5c-4248-b859-1bce1dd3e773_yqtvab.jpg'}></ShareBanner>
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {vegetables.map(veg => (
                    <ProductCard
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