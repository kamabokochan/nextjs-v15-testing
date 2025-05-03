type Props = {
	params: Promise<{ userId: number }>;
};

export default async function Page({ params }: Props) {
	const { userId } = await params;
	return (
		<main>
			<h1>ユーザ情報を表示</h1>
			<p>userId: {userId}</p>
			<p>ユーザ情報を表示するページです。</p>
		</main>
	);
}
