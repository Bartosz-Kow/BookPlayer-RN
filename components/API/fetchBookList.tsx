import axios from "axios";
import {
  wolneKsiazkiEndpoints,
  poetkiZagladyEndpoints,
  bajkiBajeczkiEndpoints,
  biblioteczkaAntycznaEndpoints,
  BASIC_URL,
} from "./endpoints";

type ApiCallParams = {
  endpoint: string;
  params?: object;
};

export const apiCall = async ({
  endpoint,
  params,
}: ApiCallParams): Promise<any> => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
};

export const fetchWolneKsiazki = async () => {
  const response = await apiCall({ endpoint: wolneKsiazkiEndpoints });

  return {
    ...response,
    books: response.books.filter((book: any) => book.has_audio === true),
  };
};

export const fetchPoetkiZaglady = async () => {
  const response = await apiCall({ endpoint: poetkiZagladyEndpoints });

  return {
    ...response,
    books: response.books.filter((book: any) => book.has_audio === true),
  };
};

export const fetchBajkiBajeczki = async () => {
  const response = await apiCall({ endpoint: bajkiBajeczkiEndpoints });

  return {
    ...response,
    books: response.books.filter((book: any) => book.has_audio === true),
  };
};

export const fetchBiblioteczkAntyczna = async () => {
  const response = await apiCall({ endpoint: biblioteczkaAntycznaEndpoints });

  return {
    ...response,
    books: response.books.filter((book: any) => book.has_audio === true),
  };
};
export const fetchBookDetails = async (slug: string) => {
  const endpoint = `${BASIC_URL}/api/books/${slug}/`;
  const response = await apiCall({ endpoint });

  return {
    ...response,
    bookId: response.slug,
    slug: undefined,
  };
};

export const fetchAuthorDetails = async (slug: string) => {
  const endpoint = `${BASIC_URL}/api/authors/${slug}`;
  const response = await apiCall({ endpoint });

  return {
    ...response,
    authorId: response.slug,
    slug: undefined,
  };
};
