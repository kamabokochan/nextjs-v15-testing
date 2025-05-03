import { getUserInfo } from "@/data/userInfo";

export async function GET(request: Request) {
	const userInfo = await getUserInfo();
	return Response.json(userInfo);
}
