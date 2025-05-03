import { UserInfo } from "@/types/data";
import Link from "next/link";

export default async function Page() {
	const response = await fetch("http://localhost:3000/api/userInfo");
	const userInfo = (await response.json()) as UserInfo[];
	// error.tsx 動作確認用
	// throw new Error("Errorが発生しました");

	return (
		<main>
			<h1>ユーザ情報を表示</h1>
			<ul>
				{userInfo.map((user) => (
					<li key={user.id}>
						<Link href={`/user/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>
			<Link href="/404">404ページ</Link>
		</main>
	);
}
