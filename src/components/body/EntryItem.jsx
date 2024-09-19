import React from "react";

const EntryItem = ({ item, onClick }) => {
  return (
    <li
      onClick={() => onClick(item)}
      className="group w-40 hover:cursor-pointer"
    >
      <div className="group-hover:opacity-70 rounded-xl border-0 group-hover:border-2 group-hover:border-solid border-white relative flex items-center aspect-[9/14] overflow-hidden w-full bg-black transition-all">
        <img
          className="absolute w-full"
          src="./assets/placeholder.png"
          alt=""
        />
        <img
          className="object-cover w-full h-full z-[1]"
          src={item.images["Poster Art"].url}
          alt={`Poster art for the movie ${item.title}`}
        />
      </div>
      <p>{item.title}</p>
    </li>
  );
};

export default EntryItem;
