"use client"

import { ChevronUpIcon, DoubleArrowUpIcon, MagicWandIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from '@/components/ui/button';


export interface ColumnHeader {
    id: number;
    name: string;
    difficulty: string;
    rating: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
};

export const columns: ColumnDef<ColumnHeader>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "difficulty",
        header: "Difficulty",
        cell: ({ row }) => {
            const difficulty = row.getValue('difficulty') as string;
            return (
                <div className="flex flex-row">
                    {difficulty === 'Easy' ? <ChevronUpIcon /> : <DoubleArrowUpIcon />}
                    <span className="pl-4">{difficulty}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "cookTimeMinutes",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}
                >
                    Cooking Time
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <span>
                    {row.getValue('cookTimeMinutes')}
                </span>
            )
        }
    },
    {
        accessorKey: "rating",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}
                >
                    Rating
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const recipe = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <Link href={'/branches/' + recipe.id}>View recipe</Link>
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(recipe.id + '')}
                        >
                            Copy payment ID
                        </DropdownMenuItem> */}
                        {/* <DropdownMenuSeparator /> */}
                        {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
                        {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
];