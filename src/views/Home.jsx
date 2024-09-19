import React, { useEffect } from "react";
import { getMovies } from "../services/movies";
import { Link } from "react-router-dom";
import image from "../assets/placeholder.png";
import BodyContainer from "../components/BodyContainer";

const Category = ({ category }) => {
  return (
    <li className="group w-40">
      <Link to={`/${category}`}>
        <div className="group-hover:opacity-70 border-0 group-hover:border-2 group-hover:border-solid border-white relative flex items-center justify-center aspect-[9/14] overflow-hidden w-full bg-black transition-all">
          <img className="absolute w-full" src={image} alt="" />
          <h2 className="text-white uppercase font-semibold text-3xl">
            {category}
          </h2>
        </div>
        <p className="capitalize">Popular {category}</p>
      </Link>
    </li>
  );
};

const Home = () => {
  useEffect(() => {
    getMovies();

    fetch("./sample.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <BodyContainer title={"Titles"}>
      <ul className="flex flex-row gap-6">
        <Category category="movies" />
        <Category category="series" />
      </ul>
    </BodyContainer>
  );
};

export default Home;
