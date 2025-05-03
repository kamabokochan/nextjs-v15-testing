import { getUserInfo } from "@/api/userInfo";

export default async function Home() {
	const userInfo = await getUserInfo();
	return (
		<main>
			<ul>
				<li>{userInfo.user}</li>
				<li>{userInfo.age}</li>
				<li>
					<a href={userInfo.link}>{userInfo.link}</a>
				</li>
			</ul>
		</main>
	);
}
