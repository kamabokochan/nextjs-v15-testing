// https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default

import { request } from "@/utils/request";

export const dynamic = "force-static";

export default async function Page() {
  const response = await request<{ time: string }>(
    `http://localhost:3000/api/getTime`,
    { cache: "force-cache" },
  );

  return (
    <div>
      <h1>Static Page</h1>
      <p>This page is statically rendered.</p>
      <p>request time: {response.data?.time}</p>
    </div>
  );
}
