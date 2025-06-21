import { request } from "@/utils/request";

export const dynamic = "force-dynamic";

export default async function Page() {
  const response = await request<{ time: string }>(
    `http://localhost:3000/api/getTime`,
  );

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>This page is dynamically rendered.</p>
      <p>request time: {response.data?.time}</p>
    </div>
  );
}
