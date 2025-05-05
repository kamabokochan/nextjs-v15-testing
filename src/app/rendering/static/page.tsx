// https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default

export const dynamic = "force-static";

export default function Page() {
	return (
		<div>
			<h1>Static Page</h1>
			<p>This page is statically rendered.</p>
		</div>
	);
}
