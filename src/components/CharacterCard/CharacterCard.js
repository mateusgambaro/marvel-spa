import React from "react";
import {
  CharacterCardContainer,
  CharacterNameContainer,
  Divider,
  FavoriteButton,
} from "./styled";
import { ReactComponent as HeartFilled } from "../../assets/icones/heart/Path.svg";
import { ReactComponent as HeartEmpty } from "../../assets/icones/heart/Path Copy 2@1,5x.svg";
import { useNavigate } from "react-router-dom";

export const CharacterCard = ({
  id,
  name,
  thumbnail,
  isFavorite,
  onFavoriteToggle,
}) => {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`.replace(
    "http://",
    "https://"
  );
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/hero/${id}`); 
  };

  return (
    <CharacterCardContainer onClick={handleCardClick}>
      <img src={imageUrl} alt={name} />
      <Divider />
      <CharacterNameContainer>
        <h3>{name}</h3>
        <FavoriteButton
          onClick={(e) => {
            e.stopPropagation(); 
            onFavoriteToggle(id);
          }}
        >
          {isFavorite ? <HeartFilled /> : <HeartEmpty />}
        </FavoriteButton>
      </CharacterNameContainer>
    </CharacterCardContainer>
  );
};
