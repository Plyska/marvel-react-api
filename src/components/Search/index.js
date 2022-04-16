import React, { useState } from "react";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (inputText) => {
    setText(inputText);
    search(inputText);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Find the Hero"
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </form>
    </section>
  );
};

export default Search;
