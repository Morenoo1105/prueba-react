import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeMovies } from "../reducers/moviesReducer";
import EntryItem from "../components/body/EntryItem";
import BodyContainer from "../components/BodyContainer";

const MoviesView = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState();

  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(initializeMovies());
  }, []);

  return (
    <BodyContainer title={"Movies"}>
      {modalVisible && (
        <div className="absolute w-full h-full inset-0 bg-neutral-800/90 z-10">
          <section>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-center text-2xl">Modal Content</p>
                <button
                  onClick={() => setModalVisible(false)}
                  className="mt-4 bg-primary-500 text-white px-4 py-2 rounded-md"
                >
                  Close Modal
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {movies.length === 0 && (
        <p className="text-center text-2xl">Loading...</p>
      )}

      {movies.error ? (
        <p className="text-center text-2xl">Oops... Something went wrong!</p>
      ) : (
        <ul className="flex flex-row flex-wrap justify-evenly items-start">
          {movies.map((movie) => (
            <EntryItem key={movie.title} item={movie} />
          ))}
        </ul>
      )}
    </BodyContainer>
  );
};

export default MoviesView;
