import {
  fetchWolneKsiazki,
  fetchPoetkiZaglady,
  fetchBajkiBajeczki,
  fetchBiblioteczkAntyczna,
} from "@/components/API/fetchBookList";

export const fetchAllBooks = async () => {
  const results = {
    wolneKsiazki: [],
    poetkiZaglady: [],
    bajkiBajeczki: [],
    biblioteczkaAntyczna: [],
  };

  try {
    const wolneResponse = await fetchWolneKsiazki();
    const poetkiResponse = await fetchPoetkiZaglady();
    const bajkiResponse = await fetchBajkiBajeczki();
    const biblioteczkaResponse = await fetchBiblioteczkAntyczna();

    results.wolneKsiazki = wolneResponse.books || [];
    results.poetkiZaglady = poetkiResponse.books || [];
    results.bajkiBajeczki = bajkiResponse.books || [];
    results.biblioteczkaAntyczna = biblioteczkaResponse.books || [];
  } catch (error) {
    console.error("Error fetching books:", error);
  }

  return results;
};
