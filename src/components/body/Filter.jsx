import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeYears } from "../../reducers/moviesReducer";
import { initializeYears as seriesInitializeYears } from "../../reducers/seriesReducer";

const Filter = ({ setYear, page }) => {
  const dispatch = useDispatch();

  var years = [];

  if (page === "movies") {
    years = useSelector(({ movies }) => movies.years);

    useEffect(() => {
      dispatch(initializeYears());
    }, []);
  }

  if (page === "series") {
    years = useSelector(({ series }) => series.years);

    useEffect(() => {
      dispatch(seriesInitializeYears());
    }, []);
  }

  return (
    <section className="w-full flex justify-center pb-4">
      <div className="flex gap-2 items-center">
        <label>Year:</label>
        <select
          onChange={(e) => setYear(e.target.value)}
          className="bg-blue-200 rounded-md px-2 py-1"
        >
          <option value={"any"}>Any</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filter;
