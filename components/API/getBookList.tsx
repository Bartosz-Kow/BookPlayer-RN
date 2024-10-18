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
    const [wolneResponse, poetkiResponse, bajkiResponse, biblioteczkaResponse] =
      await Promise.all([
        fetchWolneKsiazki(),
        fetchPoetkiZaglady(),
        fetchBajkiBajeczki(),
        fetchBiblioteczkAntyczna(),
      ]);

    results.wolneKsiazki = wolneResponse?.books || [];
    results.poetkiZaglady = poetkiResponse?.books || [];
    results.bajkiBajeczki = bajkiResponse?.books || [];
    results.biblioteczkaAntyczna = biblioteczkaResponse?.books || [];
  } catch (error) {
    console.error("Error fetching books:", error);
  }

  return results;
};
