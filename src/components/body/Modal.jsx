import React from "react";

const Modal = ({ setVisible, selectedItem }) => {
  return (
    <div
      onClick={() => setVisible(false)}
      className="absolute flex items-center justify-center w-full h-full inset-0 bg-neutral-800/90 z-10"
    >
      <section className="relative w-[90%] md:w-[60%] bg-white rounded-2xl p-6">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-center lg:flex-row gap-8">
          <img
            src={selectedItem?.images["Poster Art"].url}
            alt={selectedItem?.title}
            className="w-40 md:w-60 xl:w-80 rounded-xl"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold">
              {selectedItem?.title} - {selectedItem?.releaseYear}
            </h2>
            <p className="text-balance">{selectedItem?.description}</p>
          </div>
        </div>
        <button
          className="absolute -top-6 -left-6 bg-white border-2 text-2xl font-bold border-black rounded-full w-12 h-12"
          onClick={() => setVisible(false)}
        >
          X
        </button>
      </section>
    </div>
  );
};

export default Modal;
