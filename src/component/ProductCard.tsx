import { Button } from "@/components/ui/button";
import Image from "next/image";

type ProductCardProps={
    image:string,
    name:string,
    price:number, 
}
const ProductCard=({image,name,price}:ProductCardProps)=>{
    const handleAdd=()=>{
        
    }
    return(
         <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{price}</p>
      </div>

      {/* Add Button */}
      <div className="p-3 pt-0">
        <Button
          onClick={handleAdd}
          className="w-full"
          size="sm"
        >
          Add
        </Button>
      </div>
    </div>
    )
}
export default ProductCard;