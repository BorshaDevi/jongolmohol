import Link from "next/link";

type product={
    id:number,
    name:string,
    link:string,
}
const AllDepartments=()=>{
    return(
        <div className="min-h-screen  bg-white md:w-1/2 rounded-sm shadow-md">
             <div >
                <h1 className="uppercase text-3xl font-bold flex justify-end"><span className="text-green-800">jongol</span><span className="text-orange-500">mohol</span></h1>
                <div className="mt-5">
                    <h1 className="header text-xl">All Departments</h1>
                    <div className="p-4 mt-8">
                        <div className="md:space-y-2  space-y-4">
                       {products.map(pro=>(
                        <Link href={`/${pro.link}`} key={pro.id}><h1  className="department">{pro.name}</h1></Link>
                       ))}
                    </div>
                    </div>
                </div>
             </div>

        </div>
    )
}
export default AllDepartments;
const products:product[]=[
    {    
        id:1,
        name:'Fruit & Nut Gits',
        link:'fruit'
    },
    {    
        id:2,
        name:'Fish ',
        link:'fish'
    },
    {    
        id:3,
        name:'Vegetables',
        link:'vegetables'
    },
    {    
        id:4,
        name:'Meat',
        link:'meat'
    },
    {    
        id:5,
        name:'Butter & Egg',
        link:'egg'
    },
]