import { Pokemon } from "@/types/data";
import { request } from "@/utils/request";
import Link from "next/link";

export default async function Page() {
	const response = await request<Pokemon[]>(
		"http://localhost:3000/api/pokemonInfo",
	);

	if (response.ok === false || response.data === undefined) {
		throw new Error("データの取得に失敗しました");
	}

	if (response.data.length === 0) {
		return <p>データなし</p>;
	}

	return (
		<main>
			<h1>ポケモンリスト</h1>
			<ul>
				{response.data.map((pokemon) => (
					<li key={pokemon.id}>
						<Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
