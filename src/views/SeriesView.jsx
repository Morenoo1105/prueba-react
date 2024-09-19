import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeSeries } from "../reducers/seriesReducer";
import EntryItem from "../components/body/EntryItem";
import BodyContainer from "../components/BodyContainer";

const SeriesView = () => {
  const dispatch = useDispatch();

  const series = useSelector((state) => state.series);

  useEffect(() => {
    dispatch(initializeSeries());
  }, []);

  return (
    <BodyContainer title={"Series"}>
      {series.length === 0 && (
        <p className="text-center text-2xl">Loading...</p>
      )}

      {series.error ? (
        <p className="text-center text-2xl">Oops... Something went wrong!</p>
      ) : (
        <ul className="flex flex-row flex-wrap justify-evenly items-start">
          {series.map((serie) => (
            <EntryItem key={serie.title} item={serie} />
          ))}
        </ul>
      )}
    </BodyContainer>
  );
};

export default SeriesView;
