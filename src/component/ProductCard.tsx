
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



type ProductCardProps = {
    image: string,
    name: string,
    price: number,
    id:string,
}
const ProductCard = ({ image, name, price ,id}: ProductCardProps) => {
    // const handleAdd = () => {
    //     toast.success(`${name} is added`)
    // }
    // <Toaster
    //             position="top-center"
    //         />
    // import toast, { Toaster } from 'react-hot-toast';
    return (
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
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-xl text-red-500 mt-1">{price}/kg...</p>
            </div>

            {/* Add Button */}
            <div className="p-3 pt-0">
                <Button
                    asChild
                    className="bg-green-900 text-white rounded-md text-xl font-semibold p-1 w-full hover:bg-green-700" 
                >
                    <Link href={`/viewCard/${id}`}>View Card</Link>
                </Button>
            </div>
            
        </div>
    )
}
export default ProductCard;