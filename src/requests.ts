import { HttpEmailResponse } from "./pages/api/email";

export const httpPostEmail: (e: string) => Promise<HttpEmailResponse> = async (
  email
) => {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return await response.json();
  } catch (error) {
    return {
      message: "Error reaching server.",
      ok: false,
    };
  }
};
