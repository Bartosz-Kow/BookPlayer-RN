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

export const fetchWolneKsiazki = () => {
  return apiCall({ endpoint: wolneKsiazkiEndpoints });
};

export const fetchPoetkiZaglady = () => {
  return apiCall({ endpoint: poetkiZagladyEndpoints });
};

export const fetchBajkiBajeczki = () => {
  return apiCall({ endpoint: bajkiBajeczkiEndpoints });
};

export const fetchBiblioteczkAntyczna = () => {
  return apiCall({ endpoint: biblioteczkaAntycznaEndpoints });
};
export const fetchBookDetails = (slug: string) => {
  const endpoint = `${BASIC_URL}/api/books/${slug}/`;
  return apiCall({ endpoint });
};
