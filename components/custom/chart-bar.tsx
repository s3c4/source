"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { RecipeType } from "@/types/Recipe.type"

const chartConfig = {
    rating: {
        label: "Rating",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function ChartBar({ recipes }: { recipes: RecipeType[] }) {

    const countRecipesByRating = () => {
        const ratingCount: Array<{ rating: number, count: number }> = [];

        recipes.forEach((recipe: RecipeType) => {
            const i = ratingCount.findIndex((r: { rating: number, count: number }) => r.rating === recipe.rating)
            if (i >= 0) {
                ratingCount[i].count++;
            } else {
                ratingCount.push({ rating: recipe.rating, count: 1 });
            }
        });
        return ratingCount.sort((a, b) => a.rating - b.rating);
    }

    const chartData = countRecipesByRating();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>Rating</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="rating"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="count" fill="var(--color-rating)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    Showing total count of recipes by rating
                </div>
            </CardFooter>
        </Card>
    )
}
