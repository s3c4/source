import { columns } from "@/components/custom/recipes-column";
import { DataTable } from "@/components/custom/recipes-table";
import { RecipeType } from "@/types/Recipe.type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecipesCards } from "@/components/custom/recipes-cards";

export default async function BranchesPage() {
    const recipes = await fetch('https://dummyjson.com/recipes?limit=50').then(res => res.json());
    return (
        <div className="container mx-auto py-10">
            <Tabs defaultValue="table">
                <TabsList className="w-full">
                    <TabsTrigger className="w-full" value="table">Recipes table</TabsTrigger>
                    <TabsTrigger className="w-full" value="cards">Recipes cards</TabsTrigger>
                </TabsList>
                <TabsContent value="table">
                    <DataTable columns={columns} data={recipes?.recipes as RecipeType[]} />
                </TabsContent>
                <TabsContent value="cards">
                    <RecipesCards recipes={recipes?.recipes as RecipeType[]} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
