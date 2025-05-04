import { getPokemonInfo } from "@/data/pokemonInfo";

export async function GET(request: Request) {
	const pokemonInfo = await getPokemonInfo();
	return Response.json(pokemonInfo);
}
