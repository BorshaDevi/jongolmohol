type product={
    id:number,
    name:string,
}
const AllDepartments=()=>{
    return(
        <div className="min-h-screen bg-white w-1/2 rounded-sm shadow-md">
             <div >
                <div>
                    <h1 className="header text-xl">All Departments</h1>
                    <div className="p-4 mt-8">
                        <div className="space-y-2 ">
                       {products.map(pro=>(
                        <h1 key={pro.id} className="department">{pro.name}</h1>
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
        name:'Fruit & Nut Gits'
    },
    {    
        id:2,
        name:'Fresh '
    },
    {    
        id:3,
        name:'Vegetables'
    },
    {    
        id:4,
        name:'Meat'
    },
    {    
        id:5,
        name:'Butter & Eggs'
    },
]