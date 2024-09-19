export const getMovies = () => {
  return fetch("./sample.json")
    .then(async (response) => {
      //! Simula los tiempos de carga
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return response.json();
    })
    .then((data) => {
      return data.entries
        .filter(
          (entry) => entry.programType === "movie" && entry.releaseYear >= 2010
        )
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, 20);
    })
    .catch((error) => {
      return { error: "Oops... Something went wrong!" };
    });
};

export default { getMovies };
