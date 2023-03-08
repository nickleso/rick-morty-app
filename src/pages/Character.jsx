import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCharacterById } from "../rickMortyAPI/fetchCharacters";
import { CharacterInfo } from "../components/CharacterInfo";
import { Loader } from "../components/Loader";

export const Character = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function searchCharacterById() {
      try {
        setLoading(true);

        const character = await fetchCharacterById(id);
        setCharacterInfo(character);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    searchCharacterById();
  }, [id]);

  // if (!characterInfo) {
  //   return null;
  // }

  return (
    <>
      <div>
        <header>
          <Link
            to="/"
            style={{
              color: "#2c2e30",
            }}
          >
            GO BACK
          </Link>
          <h1>Character page</h1>
        </header>
      </div>

      {loading ? (
        <Loader />
      ) : (
        characterInfo !== null && <CharacterInfo character={characterInfo} />
      )}
    </>
  );
};
