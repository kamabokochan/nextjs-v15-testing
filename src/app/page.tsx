import { getUserInfo } from "@/data/userInfo";
import Link from "next/link";

export default async function Page() {
	const userInfo = await getUserInfo();

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
