'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RecipeType } from "@/types/Recipe.type"
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CookieIcon, LapTimerIcon, ScissorsIcon } from "@radix-ui/react-icons";
import { ChefHatIcon, TrendingUpIcon, UtensilsIcon } from "lucide-react";

export function RecipeId({ recipe }: { recipe: RecipeType }) {

    return (
        <Card>
            <CardHeader>
                <img className="object-cover w-full h-[400px]" src={recipe.image} alt={recipe.name} />
                <CardTitle>{recipe.name}</CardTitle>
                <div className="flex flex-row gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Badge variant={'destructive'}>
                                    <CookieIcon className="mr-1" />
                                    {recipe.caloriesPerServing}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Calories</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Badge variant={'destructive'}>
                                    <LapTimerIcon className="mr-1" />
                                    {recipe.cookTimeMinutes} mins
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Cooking Time</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Badge variant={'destructive'}>
                                    <UtensilsIcon size={16} className="mr-1" />
                                    {recipe.servings}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Servings</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <CardTitle className="mb-2">Ingredients</CardTitle>
                        <ul className="list-disc ml-4">
                            {
                                recipe.ingredients.map((ingredient: string) =>
                                    <li key={ingredient}>{ingredient}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <CardTitle className="mb-2">Instructions</CardTitle>
                        <ul className="list-decimal ml-4">
                            {
                                recipe.instructions.map((instruction: string) =>
                                    <li key={instruction}>{instruction}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex flex-row gap-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Badge>
                                    <TrendingUpIcon size={16} className="mr-1" />
                                    {recipe.difficulty}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Difficulty</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Badge>
                                    <ChefHatIcon size={16} className="mr-1" />
                                    {recipe.cuisine}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Cuisine</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </CardFooter>
        </Card>
    )
}