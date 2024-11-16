import { ChartBar } from "@/components/custom/chart-bar";
import { ChartLine } from "@/components/custom/chart-line";
import { ChartPie } from "@/components/custom/chart-pie";
import { RecipeType } from "@/types/Recipe.type";

export default async function PerformancePage() {
    const recipes = await fetch('https://dummyjson.com/recipes?limit=50').then(res => res.json());

    return (
        <div className="container mx-auto py-10">
            <ChartLine />
            <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                    <ChartBar recipes={recipes.recipes as RecipeType[]} />
                </div>
                <div>
                    <ChartPie recipes={recipes.recipes as RecipeType[]} />
                </div>
            </div>
        </div>
    );
}
