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

export async function deleteById(id) {
  const requestInit = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer 12120117",
    },
  };

  const responseHttp = await fetch(URL + "/" + id, requestInit);

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else {
    console.log(await responseHttp.text());
    throw new Error("Falha ao deletar o livro");
  }
}
