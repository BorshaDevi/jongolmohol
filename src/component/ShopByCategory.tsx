import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const ShopByCategory=()=>{
    return(
        <div>
            <div className="mt-10">
               <h1 className="text-4xl text-center font-bold text-green-800 underline-offset-auto underline">Shop By Category</h1>
               <div className="grid grid-cols-3 gap-5">
                <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
               </div>
            </div>
        </div>
    )
}
export default ShopByCategory;