import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeSeries } from "../reducers/seriesReducer";
import EntryItem from "../components/body/EntryItem";
import BodyContainer from "../components/BodyContainer";
import Filter from "../components/body/Filter";
import Modal from "../components/body/Modal";

const SeriesView = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [year, setYear] = useState("any");

  const series = useSelector(({ series }) => series.series);

  const itemPressed = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  useEffect(() => {
    dispatch(initializeSeries(year));
  }, [year]);

  return (
    <BodyContainer title={"Series"}>
      {modalVisible && (
        <Modal setVisible={setModalVisible} selectedItem={selectedItem} />
      )}

      {series.length === 0 && (
        <p className="text-center text-2xl">Loading...</p>
      )}

      {series.error ? (
        <p className="text-center text-2xl">Oops... Something went wrong!</p>
      ) : (
        <>
          <Filter setYear={setYear} page={"series"} />
          <ul className="flex flex-row flex-wrap gap-4 justify-evenly items-start">
            {series.map((serie) => (
              <EntryItem key={serie.title} item={serie} onClick={itemPressed} />
            ))}
          </ul>
        </>
      )}
    </BodyContainer>
  );
};

export default SeriesView;
