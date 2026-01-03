'use client'
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const FeaturedProducts=()=>{
    return(
       <div className=" px-4 mt-10">
      <h1 className="text-4xl text-center font-bold text-orange-600 underline-offset-auto underline ">
       Featured Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {products.map((pro) => (
          <Card
            key={pro.id}
            className="bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden border-none "
          >
            {/* Image */}
            <img
              src={pro.image}
              alt={pro.category}
              className="w-full h-44 object-cover hover:"
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
        ))}
      </div>
    </div>
    )
}
export default FeaturedProducts


const products=[
    {
      id:1,
      category:'fish',
      proName:'Rui',
      price:120,
      rate:4,
      image:'',
    },
    {
      id:2,
      category:'fish',
      proName:'Prawn',
      price:120,
      rate:4,
      image:'',
    },
    {
      id:3,
      category:'nuts',
      proName:'Almond',
      price:120,
      rate:4,
      image:'',
    },
    {
      id:4,
      category:'vegetables',
      proName:'Organic Tomato',
      price:120,
      rate:4,
      image:'',
    },
]