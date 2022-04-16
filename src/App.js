import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import CharacterTable from "./components/CharacterTable";
import Search from "./components/Search";
import axios from "axios";

const hash = "0306df97d2099ef37dc51de35d01e63e";
const key = "e3e3fc61e41a1b432fd2a74ec6c2752b";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serchCharacter, setSerchCharacter] = useState("");
  const url = serchCharacter
    ? `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${serchCharacter}&ts=1&apikey=${key}&hash=${hash}`
    : `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const fetch = async () => {
      const results = await axios(url);
      setData(results.data.data.results);
      setIsLoading(false);
    };
    fetch();
  }, [url]);
  return (
    <div className="container">
      <Header />
      <Search search={(text) => setSerchCharacter(text)} />
      <CharacterTable data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
