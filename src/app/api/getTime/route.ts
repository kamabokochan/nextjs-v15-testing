import dayjs from "dayjs";
import { NextResponse } from "next/server";

export async function GET() {
  const formattedTime = dayjs().format("YYYY年MM月DD日 HH時mm分ss秒");
  return NextResponse.json({ time: formattedTime });
}
