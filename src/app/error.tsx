// error.tsxは、クライアントコンポーネントとして定義する必要がある。
"use client";

export default function Error() {
  return (
    <main>
      <h1>エラーが発生しました</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <p>URLが正しいか、ページが削除された可能性があります。</p>
    </main>
  );
}
