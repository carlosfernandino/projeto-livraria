const URL =
  "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books";

export async function findAll() {
  const requestInit = {
    method: "GET",
    headers: {
      Authorization: "Bearer 12120117",
    },
  };

  const responseHttp = await fetch(URL, requestInit);

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else {
    throw new Error("Falha ao consultar os livros");
  }
}
