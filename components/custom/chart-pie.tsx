"use client"

import { useMemo, useState } from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RecipeType } from "@/types/Recipe.type"

let chartConfig = {
    visitors: {
        label: "Visitors",
    },
    difficulty: {
        label: "Difficulty",
    }
} satisfies ChartConfig

export function ChartPie({ recipes }: { recipes: RecipeType[] }) {

    const countRecipesByDifficulty = () => {
        const difficultyCount: Array<{ difficulty: string, count: number, fill: string; }> = [];

        recipes.forEach((recipe: RecipeType) => {
            const i = difficultyCount.findIndex((d: { difficulty: string, count: number }) => d.difficulty === recipe.difficulty)
            if (i >= 0) {
                difficultyCount[i].count++;
            } else {
                difficultyCount.push({ difficulty: recipe.difficulty, count: 1, fill: "var(--color-" + recipe.difficulty + ")" });
                chartConfig[recipe.difficulty] = {
                    label: recipe.difficulty,
                    color: "hsl(var(--chart-" + (difficultyCount.length + 1) + "))",
                }
            }
        });

        return difficultyCount;
    }

    const chartData = countRecipesByDifficulty();

    const id = "pie-interactive"
    const [activeDifficulty, setActiveDifficulty] = useState(chartData[0].difficulty)

    const activeIndex = useMemo(
        () => chartData.findIndex((item) => item.difficulty === activeDifficulty),
        [activeDifficulty]
    )
    const difficulties = useMemo(() => chartData.map((item) => item.difficulty), [])

    return (
        <Card data-chart={id} className="flex flex-col">
            <ChartStyle id={id} config={chartConfig} />
            <CardHeader className="flex-row items-start space-y-0 pb-0">
                <div className="grid gap-1">
                    <CardTitle>Pie Chart - Interactive</CardTitle>
                    <CardDescription>Recipes difficulty level</CardDescription>
                </div>
                <Select value={activeDifficulty} onValueChange={setActiveDifficulty}>
                    <SelectTrigger
                        className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-xl">
                        {difficulties.map((key) => {
                            const config = chartConfig[key as keyof typeof chartConfig]

                            if (!config) {
                                return null
                            }

                            return (
                                <SelectItem
                                    key={key}
                                    value={key}
                                    className="rounded-lg [&_span]:flex"
                                >
                                    <div className="flex items-center gap-2 text-xs">
                                        <span
                                            className="flex h-3 w-3 shrink-0 rounded-sm"
                                            style={{
                                                backgroundColor: `var(--color-${key})`,
                                            }}
                                        />
                                        {config?.label}
                                    </div>
                                </SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center pb-0">
                <ChartContainer
                    id={id}
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[300px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="count"
                            nameKey="difficulty"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({
                                outerRadius = 0,
                                ...props
                            }: PieSectorDataItem) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius + 10} />
                                    <Sector
                                        {...props}
                                        outerRadius={outerRadius + 25}
                                        innerRadius={outerRadius + 12}
                                    />
                                </g>
                            )}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {chartData[activeIndex].count}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    {chartData[activeIndex].difficulty}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
