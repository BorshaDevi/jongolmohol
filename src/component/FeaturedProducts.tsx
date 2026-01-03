
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const FeaturedProducts = () => {
    return (
        <div className=" px-4 mt-10">
            <h1 className="text-4xl text-center font-bold text-orange-600 underline-offset-auto underline ">
                Featured Products
            </h1>
            <Carousel className="mt-10">
                <CarouselContent >
                        {products.map((pro) => (
                            <CarouselItem key={pro.id} className="md:basis-1/3  ">
                                <Card

                                    className="bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden border-none "
                                >
                                    {/* Image */}
                                    <img
                                        src={pro.image}
                                        alt={pro.category}
                                        className="w-full h-44 object-cover p-3 rounded-md"
                                    />

                                    {/* Content */}
                                    <CardHeader className="text-center p-4">
                                        <CardTitle className="text-2xl font-extrabold text-black">
                                            {pro.proName}
                                        </CardTitle>
                                        <p className="text-xl font-semibold">{pro.price}</p>
                                        <p>rating</p>
                                        <button className="btn">
                                            Add to Cart
                                        </button>
                                    </CardHeader>
                                </Card>
                            </CarouselItem>
                        ))}
                </CarouselContent>
                <CarouselPrevious className="text-orange-800 font-bold" />
                <CarouselNext className="text-orange-800 font-bold" />
            </Carousel>
        </div>
    )
}
export default FeaturedProducts


const products = [
    {
        id: 1,
        category: 'fish',
        proName: 'Rui',
        price: 120,
        rate: 4,
        image: 'https://res.cloudinary.com/dg1okcxsx/image/upload/v1767455691/raw-fresh-fish_vyqrtl.jpg',
    },
    {
        id: 2,
        category: 'fish',
        proName: 'Prawn',
        price: 120,
        rate: 4,
        image: 'https://res.cloudinary.com/dg1okcxsx/image/upload/v1767455518/fresh-shrimp-prawn_y2kdjj.jpg',
    },
    {
        id: 3,
        category: 'vegetables',
        proName: 'Organic Tomato',
        price: 120,
        rate: 4,
        image: 'https://res.cloudinary.com/dg1okcxsx/image/upload/v1767455492/close-up-view-tomatoes-wooden-surface_t6ko0t.jpg',
    },
    {
        id: 4,
        category: 'nuts',
        proName: 'Almond',
        price: 120,
        rate: 4,
        image: 'https://res.cloudinary.com/dg1okcxsx/image/upload/v1767201605/pexels-pixabay-38292_ccpzn0.jpg',
    },

    {
        id: 5,
        category: 'fruits',
        proName: 'Organic Mango',
        price: 120,
        rate: 4,
        image: 'https://res.cloudinary.com/dg1okcxsx/image/upload/v1767455498/delicious-mango-still-life_va6nii.jpg',
    },
]