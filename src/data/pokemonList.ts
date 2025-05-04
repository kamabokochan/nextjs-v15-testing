import { Pokemon } from "@/types/data";

export async function getPokemonList(): Promise<Pokemon[]> {
	return [
		{
			id: 1,
			name: "フシギダネ",
			type: "くさ",
		},
		{
			id: 2,
			name: "ヒトカゲ",
			type: "ほのお",
		},
		{
			id: 3,
			name: "ゼニガメ",
			type: "みず",
		},
		{
			id: 4,
			name: "ピカチュウ",
			type: "でんき",
		},
		{
			id: 5,
			name: "ニャース",
			type: "ノーマル",
		},
	];
}
