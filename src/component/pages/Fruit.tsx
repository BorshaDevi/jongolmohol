import ProductCard from "../ProductCard";
import ShareBanner from "../ShareBanner";

const Fruit=()=>{
    return (
        <div>
            <ShareBanner title={"Fruit collection"} text={'Here are various types of Fruit.'} image={'https://res.cloudinary.com/dg1okcxsx/image/upload/v1769254572/top-view-juicy-fruits-such-as-pineapple-colorful-apples-lemons-bowl-with-lemons-isolated-white-wall_adhfkv.jpg'}></ShareBanner>
             <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {fruit.map(fruit => (
                    <ProductCard
                        key={fruit.id}
                        image={fruit.image}
                        name={fruit.name}
                        price={fruit.price}
                    />
                ))}
            </div>
        </div>
    )
}
export default Fruit;