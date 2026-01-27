
import { Button } from "@/components/ui/button";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';


type ProductCardProps = {
    image: string,
    name: string,
    price: number,
    id: string,
}
const ProductCard = ({ image, name, price, id }: ProductCardProps) => {

    // add function
    const handleAdd = (id: string, name: string) => {
        toast.success(`${name} is added`)
    }

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
                <p className="text-xl text-red-500 mt-1">{price}/kg</p>
            </div>

            {/* Add Button */}
            <div className="p-3 pt-0">
                <Button
                    onClick={() => handleAdd(id, name)}
                    className="bg-green-900 text-white rounded-md text-xl font-semibold p-1 w-full hover:bg-green-700"
                >
                    Add Card
                </Button>
            </div>
            <Toaster
                position="top-center"
            />
        </div>
    )
}
export default ProductCard;