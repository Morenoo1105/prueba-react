export const getSeries = async (year) => {
  try {
    const response = await fetch("./sample.json");

    //! Simula los tiempos de carga
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await response.json();

    return data.entries
      .filter(
        (entry) =>
          entry.programType === "series" &&
          (year === "any"
            ? entry.releaseYear >= 2010
            : entry.releaseYear == year)
      )
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20);
  } catch (error) {
    return { error: "Oops... Something went wrong!" };
  }
};

const getYears = async () => {
  try {
    const response = await fetch("./sample.json");

    const data = await response.json();
    return Array.from(
      new Set(
        data.entries
          .filter((entry) => entry.programType === "series")
          .map((entry) => entry.releaseYear)
      )
    ).sort((a, b) => a - b);
  } catch (error) {
    return { error: "Oops... Something went wrong!" };
  }
};

export default { getSeries, getYears };
