import { Pokemon } from "@/types/data";

export async function getPokemonList(): Promise<Pokemon[]> {
	return [
		{
			id: 1,
			name: "フシギダネ",
			type: "grass",
		},
		{
			id: 2,
			name: "ヒトカゲ",
			type: "fire",
		},
		{
			id: 3,
			name: "ゼニガメ",
			type: "water",
		},
		{
			id: 4,
			name: "ピカチュウ",
			type: "electric",
		},
		{
			id: 5,
			name: "ニャース",
			type: "normal",
		},
	];
}
