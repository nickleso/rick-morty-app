import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Filter } from "../components/Filter";
import { fetchCharacters } from "../rickMortyAPI/fetchCharacters";
import { CharactersList } from "../components/CharactersList";
import { Loader } from "../components/Loader";
import { ButtonLoadMore } from "../components/ButtonLoadMore";

export const Home = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function searchCharacters() {
      try {
        setLoading(true);

        const characters = await fetchCharacters(page);
        setCharactersList(characters.results);
        setTotalPages(characters.info.pages);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    searchCharacters();
  }, [page]);

  const loadNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const loadPrevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <>
      <Header />
      <Filter />

      {loading ? (
        <Loader />
      ) : (
        charactersList.length > 0 && (
          <CharactersList characters={charactersList} />
        )
      )}

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {page !== 1 && (
          <ButtonLoadMore loadMore={loadPrevPage} buttonName={"prev"} />
        )}

        {page !== totalPages && (
          <ButtonLoadMore loadMore={loadNextPage} buttonName={"next"} />
        )}
      </div>
    </>
  );
};
