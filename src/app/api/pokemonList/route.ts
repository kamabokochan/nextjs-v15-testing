import { getPokemonList } from "@/data/pokemonList";
import { Type } from "@/types/data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const type = searchParams.get("type") as "all" | Type | null;

	const pokemonList = await getPokemonList();

	const filteredPokemonList = pokemonList.filter((pokemon) => {
		if (type === null || type === "all") {
			return true;
		}
		return pokemon.type === type;
	});

	return Response.json(filteredPokemonList);
}
