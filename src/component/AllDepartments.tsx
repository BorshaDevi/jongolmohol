import Link from "next/link";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"
import { Plus } from "lucide-react";


type product = {
    id: number,
    name: string,
    link: string,
}


const AllDepartments = () => {

    return (
        <div className="md:block hidden">
            <SidebarProvider>
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Projects</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {products.map((product) => (
                                        <SidebarMenuItem key={product.name}>
                                            <SidebarMenuButton asChild>
                                                <span>{product.name}</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
            </SidebarProvider>
        </div>
    )
}
export default AllDepartments;
const products: product[] = [
    {
        id: 1,
        name: 'Fruit & Nut Gits',
        link: 'fruit'
    },
    {
        id: 2,
        name: 'Fish ',
        link: 'fish'
    },
    {
        id: 3,
        name: 'Vegetables',
        link: 'vegetables'
    },
    {
        id: 4,
        name: 'Meat',
        link: 'meat'
    },
    {
        id: 5,
        name: 'Butter & Egg',
        link: 'egg'
    },
]

