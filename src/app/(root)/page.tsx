import { PokemonList } from "@/app/(root)/components/PokemonList";

export default async function Page() {
	return (
		<main>
			<h1>ポケモンリスト</h1>
			<PokemonList />
		</main>
	);
}
