import { getTypeList } from "@/data/typeList";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const typeList = await getTypeList();
		return NextResponse.json(typeList);
	} catch (error) {
		console.error(error);
		return NextResponse.json([], { status: 500 });
	}
}
