import { UserInfo } from "@/types/data";
import { request } from "@/utils/request";
import Link from "next/link";

export default async function Page() {
	const response = await request<UserInfo[]>(
		"http://localhost:3000/api/userInfo",
	);

	if (response.ok === false || response.data === undefined) {
		throw new Error("データの取得に失敗しました");
	}

	if (response.data.length === 0) {
		return <p>データなし</p>;
	}

	return (
		<main>
			<h1>ユーザ情報を表示</h1>
			<ul>
				{response.data.map((user) => (
					<li key={user.id}>
						<Link href={`/user/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>
			<Link href="/404">404ページ</Link>
		</main>
	);
}
