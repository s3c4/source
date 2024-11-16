import { RecipeId } from "@/components/custom/recipe-id";

export default async function BranchesIdPage({ params }: { params: any }) {

    const { id } = await params;
    const recipe = await fetch('https://dummyjson.com/recipes/' + id).then(res => res.json());

    return (<RecipeId recipe={recipe} />);
}
