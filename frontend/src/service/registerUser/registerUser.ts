type ServiceUserType = {
  username: string
  email: string
  password: string
}

type ApiResponse = {
  message: string
}
export async function registerUser(data: ServiceUserType): Promise<ApiResponse | null> {
  const res = await fetch("http://localhost:8080/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  let responseBody: ApiResponse | null = null;

  try {
    responseBody = (await res.json()) as ApiResponse;
  } catch {
    responseBody = null;
  }

  if (!res.ok) {
    const message = responseBody?.message || "Erro no cadastro";
    throw new Error(message);
  }

  return responseBody;
}
