import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { fetchCharacterById } from "../rickMortyAPI/fetchCharacters";
import { CharacterInfo } from "../components/CharacterInfo";
import { Loader } from "../components/Loader";

import { CharacterPageHeader } from "../components/CharacterPageHeader";

export const Character = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? "/";

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
      <CharacterPageHeader backLinkHref={backLinkHref} />

      {loading ? (
        <Loader />
      ) : (
        characterInfo !== null && <CharacterInfo character={characterInfo} />
      )}
    </>
  );
};
