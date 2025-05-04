import { getTypeList } from "@/data/typeList";

export async function GET(request: Request) {
	const typeList = await getTypeList();
	return Response.json(typeList);
}
