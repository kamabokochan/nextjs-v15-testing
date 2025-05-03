import { getUserInfo } from "@/data/userInfo";
import Link from "next/link";

export default async function Home() {
	const userInfo = await getUserInfo();

	// error.tsx 動作確認用
	// throw new Error("Errorが発生しました");

	return (
		<main>
			<h1>ユーザ情報を表示</h1>
			<ul>
				<li>{userInfo.user}</li>
				<li>{userInfo.age}</li>
				<li>
					<a href={userInfo.link}>{userInfo.link}</a>
				</li>
			</ul>
			<Link href="/404">404ページ</Link>
		</main>
	);
}
