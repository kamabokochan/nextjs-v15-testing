type Props = {
	params: Promise<{ pokemonId: number }>;
};

export default async function Page({ params }: Props) {
	const { pokemonId } = await params;
	return (
		<main>
			<h1>ポケモン情報</h1>
			<p>id: {pokemonId}</p>
		</main>
	);
}
