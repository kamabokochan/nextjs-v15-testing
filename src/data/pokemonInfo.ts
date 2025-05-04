import { Pokemon } from "@/types/data";

export async function getPokemonInfo(): Promise<Pokemon[]> {
	return [
		{
			id: 1,
			name: "フシギダネ",
			type: "草",
		},
		{
			id: 2,
			name: "ヒトカゲ",
			type: "炎",
		},
		{
			id: 3,
			name: "ゼニガメ",
			type: "水",
		},
		{
			id: 4,
			name: "ピカチュウ",
			type: "電気",
		},
		{
			id: 5,
			name: "ニャース",
			type: "ノーマル",
		},
	];
}
