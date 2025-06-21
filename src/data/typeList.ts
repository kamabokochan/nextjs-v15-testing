import { Type } from "@/types/data";

export async function getTypeList(): Promise<Type[]> {
  return ["grass", "fire", "water", "electric", "normal"];
}
