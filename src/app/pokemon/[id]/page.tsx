type Props = {
  params: Promise<{ id: number }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  return (
    <main>
      <h1>ポケモン情報</h1>
      <p>id: {id}</p>
    </main>
  );
}
