'use client'

import { RecipeType } from "@/types/Recipe.type";
import {
    Card,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Link from "next/link";

export function RecipesCards({ recipes }: { recipes: RecipeType[] }) {

    const [recipesState, setRecipesState] = useState(recipes);

    const sortRecipes = (value: string) => {
        if (value === 'caloriesPerServing') {
            setRecipesState([...recipes.sort((a, b) => a.caloriesPerServing - b.caloriesPerServing)]);
        }
        if (value === 'cookTimeMinutes') {
            setRecipesState([...recipes.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes)]);
        }
    };

    return (
        <>
            <Select onValueChange={sortRecipes}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Order by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="caloriesPerServing">Calories</SelectItem>
                    <SelectItem value="cookTimeMinutes">Cooking time</SelectItem>
                </SelectContent>
            </Select>
            <br />
            <div className="grid grid-cols-4 gap-4">
                {
                    recipesState.map((recipe: RecipeType) =>
                        <Link href={'/branches/' + recipe.id} key={recipe.id}>
                            <Card>
                                <div className="relative overflow-hidden">
                                    <img
                                        src={recipe.image}
                                        alt="Image"
                                        className="rounded-lg object-cover w-[400px] h-[400px] hover:scale-125"
                                    />
                                    <CardTitle className="absolute bottom-0 text-center w-full py-4 bg-transparent backdrop-blur-md">{recipe.name}</CardTitle>
                                    <Badge className="absolute top-2 right-2 uppercase" variant={'secondary'}>{recipe.difficulty}</Badge>
                                    <Badge className="absolute top-2 left-2" variant={'destructive'}>
                                        Calories: {recipe.caloriesPerServing}
                                    </Badge>
                                    <Badge className="absolute top-10 left-2" variant={'destructive'}>
                                        Cooking time: {recipe.cookTimeMinutes} mins
                                    </Badge>
                                </div>
                            </Card>
                        </Link>
                    )
                }
            </div>
        </>
    )
}