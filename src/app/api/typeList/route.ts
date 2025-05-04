import { getTypeList } from "@/data/typeList";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const typeList = await getTypeList();
		return NextResponse.json(typeList);
	} catch (error) {
		console.error(error);
		return NextResponse.json([], { status: 500 });
	}
}
