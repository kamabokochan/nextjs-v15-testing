import { getTypeList } from "@/data/typeList";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const typeList = await getTypeList();
	return Response.json(typeList);
}
