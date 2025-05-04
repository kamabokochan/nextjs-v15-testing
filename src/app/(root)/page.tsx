import { PokemonList } from "./components/PokemonList";
import { TypeList } from "./components/TypeList";

type Props = {
	searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function Page({ searchParams }: Props) {
	const { type } = await searchParams;
	return (
		<main>
			<h1>Pokedex</h1>
			<h2>Type</h2>
			<TypeList />
			<h2>Pokemon</h2>
			<PokemonList type={type} />
		</main>
	);
}
