import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeSeries } from "../reducers/seriesReducer";
import EntryItem from "../components/body/EntryItem";
import BodyContainer from "../components/BodyContainer";

const SeriesView = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const series = useSelector((state) => state.series);

  const itemPressed = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  useEffect(() => {
    dispatch(initializeSeries());
  }, []);

  return (
    <BodyContainer title={"Series"}>
      {modalVisible && (
        <div
          onClick={() => setModalVisible(false)}
          className="absolute flex items-center justify-center w-full h-full inset-0 bg-neutral-800/90 z-10"
        >
          <section className="relative w-[60%] h-[60%] bg-white rounded-2xl p-6">
            <div className="flex flex-row gap-8">
              <img
                src={selectedItem?.images["Poster Art"].url}
                alt={selectedItem?.title}
                className="w-80 rounded-xl"
              />
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold">
                  {selectedItem?.title}-{selectedItem?.releaseYear}
                </h2>
                <p className="text-balance">{selectedItem?.description}</p>
              </div>
            </div>
            <button
              className="absolute -top-6 -left-6 bg-white border-2 text-2xl font-bold border-black rounded-full w-12 h-12"
              onClick={() => setModalVisible(false)}
            >
              X
            </button>
          </section>
        </div>
      )}

      {series.length === 0 && (
        <p className="text-center text-2xl">Loading...</p>
      )}

      {series.error ? (
        <p className="text-center text-2xl">Oops... Something went wrong!</p>
      ) : (
        <ul className="flex flex-row flex-wrap gap-4 justify-evenly items-start">
          {series.map((serie) => (
            <EntryItem key={serie.title} item={serie} onClick={itemPressed} />
          ))}
        </ul>
      )}
    </BodyContainer>
  );
};

export default SeriesView;
