import React from "react";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { CharacterGridContainer } from "./styled";
import ReactLoading from "react-loading";

export const CharacterGrid = ({ characters, loading, onFavoriteToggle }) => {
  if (loading)
    return <ReactLoading type="spin" color="red" height={100} width={75} />;

  return (
    <CharacterGridContainer>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          {...character}
          onFavoriteToggle={() => onFavoriteToggle(character.id)}
        />
      ))}
    </CharacterGridContainer>
  );
};

export default CharacterGrid;
