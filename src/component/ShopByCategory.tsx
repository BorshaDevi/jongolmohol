'use client'
import SimpleParallax from "simple-parallax-js";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const ShopByCategory = () => {
    return (
        <div className="mt-12 px-4">
      <h1 className="text-4xl text-center font-bold text-green-800 mb-8">
        Shop By Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cate) => (
          <Card
            key={cate.id}
            className="bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden border-none "
          >
            {/* Image */}
            <SimpleParallax>
            <img
              src={cate.image}
              alt={cate.category}
              className="w-full h-44 object-cover hover:"
            />
            </SimpleParallax>
            {/* Content */}
            <CardHeader className="text-center p-4">
              <CardTitle className="text-2xl font-extrabold text-black">
                {cate.category}
              </CardTitle>

              <button className="btn">
                View Products
              </button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;


const categories = [
    {
        id: 1,
        category: "Fish",
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275901/fresh-bass-with-white-background_xp9ts1.jpg",
    },
    {
        id: 2,
        category: "Vegetables",
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275850/408645018_e4f72981-ae5c-4248-b859-1bce1dd3e773_yqtvab.jpg",
    },
    {
        id: 3,
        category: "Fruits",
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275717/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_g9alek.jpg",
    },
    {
        id: 4,
        category: "Nuts",
        image: "https://res.cloudinary.com/dg1okcxsx/image/upload/v1767201605/pexels-pixabay-38292_ccpzn0.jpg",
    },
];