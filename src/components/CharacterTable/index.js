import React from "react";
import CharacterCard from "../CharacterCard";

const CharacterTable = ({ data, isLoading }) => {
  return isLoading ? (
    <div className="loader">
      <div className="lds-dual-ring" />
    </div>
  ) : (
    <section className="contents">
      {data.map((item) => (
        <CharacterCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CharacterTable;
