"use client";

export default function Page() {
  function handleReload() {
    window.location.reload();
  }

  return (
    <div>
      <button onClick={handleReload} data-testid="button">
        Reload
      </button>
    </div>
  );
}
