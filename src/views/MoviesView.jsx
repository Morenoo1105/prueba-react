import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeMovies } from "../reducers/moviesReducer";
import EntryItem from "../components/body/EntryItem";
import BodyContainer from "../components/BodyContainer";
import Modal from "../components/body/Modal";

const MoviesView = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const movies = useSelector((state) => state.movies);

  const itemPressed = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  useEffect(() => {
    dispatch(initializeMovies());
  }, []);

  return (
    <BodyContainer title={"Movies"}>
      {modalVisible && (
        <Modal setVisible={setModalVisible} selectedItem={selectedItem} />
      )}

      {movies.length === 0 && (
        <p className="text-center text-2xl">Loading...</p>
      )}

      {movies.error ? (
        <p className="text-center text-2xl">Oops... Something went wrong!</p>
      ) : (
        <ul className="flex flex-row flex-wrap gap-4 justify-evenly items-start">
          {movies.map((movie) => (
            <EntryItem key={movie.title} item={movie} onClick={itemPressed} />
          ))}
        </ul>
      )}
    </BodyContainer>
  );
};

export default MoviesView;
