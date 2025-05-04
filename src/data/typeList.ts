import { Type } from "@/types/data";

export async function getTypeList(): Promise<Type[]> {
	return ["くさ", "ほのお", "みず", "でんき", "ノーマル"];
}
