export async function request<T>(
  url: string,
  options?: RequestInit,
): Promise<{ ok: boolean; data?: T }> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    return {
      ok: response.ok,
    };
  }

  return {
    ok: response.ok,
    data: await response.json(),
  };
}
