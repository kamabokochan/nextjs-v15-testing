import { getPokemonList } from "@/data/pokemonList";
import { Type } from "@/types/data";
import { sleep } from "@/utils/sleep";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type") as "all" | Type | null;

    await sleep(1000);
    const pokemonList = await getPokemonList();

    const filteredPokemonList = pokemonList.filter((pokemon) => {
      if (type === null || type === "all") {
        return true;
      }
      return pokemon.type === type;
    });

    return NextResponse.json(filteredPokemonList, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
