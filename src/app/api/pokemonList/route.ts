import { getPokemonList } from "@/data/pokemonList";

export async function GET(request: Request) {
	const pokemonList = await getPokemonList();
	return Response.json(pokemonList);
}
