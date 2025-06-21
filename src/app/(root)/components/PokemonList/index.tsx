import { Pokemon } from "@/types/data";
import { request } from "@/utils/request";
import Link from "next/link";

type Props = {
  type?: string;
};

export async function PokemonList({ type }: Props) {
  const response = await request<Pokemon[]>(
    `http://localhost:3000/api/pokemonList?type=${type}`,
  );

  if (response.ok === false || response.data === undefined) {
    return <p>データの取得に失敗しました</p>;
  }

  return (
    <ul>
      {response.data.map((pokemon) => (
        <li key={pokemon.id}>
          <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
}
