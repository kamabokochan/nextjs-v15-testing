import { Type } from "@/types/data";
import { request } from "@/utils/request";
import Link from "next/link";

export async function TypeList() {
  const response = await request<Type[]>("http://localhost:3000/api/typeList");

  if (response.ok === false || response.data === undefined) {
    return <p>データの取得に失敗しました</p>;
  }

  return (
    <ul>
      <li>
        <Link href={`/?type=all`}>all</Link>
      </li>
      {response.data.map((type) => (
        <li key={type}>
          <Link href={`/?type=${type}`}>{type}</Link>
        </li>
      ))}
    </ul>
  );
}
