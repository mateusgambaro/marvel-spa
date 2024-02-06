import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useCharacterDetails from "../hooks/useCharactersDetails";
import DetailsTop from "../components/DetailsTop.js/DetailsTop";
import DetailsComics from "../components/DetailsComics.js/DetailsComics";
import FilterDetails from "../components/FilterDetails/FilterDetail";

const HeroDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgrounds.tertiary};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const HeroDetailsPage = ({ heroId }) => {
  const { id } = useParams();
  const { characterDetails, comics, loading, toggleFavorite } =
  useCharacterDetails(id);

  return (
    <HeroDetailsContainer>
      <FilterDetails />
      <DetailsTop
        characterDetails={characterDetails}
        onToggleFavorite={toggleFavorite}
      />
      <DetailsComics comics={comics} loading={loading} />
      <div
        style={{
          display: "flex",
          backgroundColor: "#FF1510",
          height: "50px",
          width: "100%",
        }}
      />
    </HeroDetailsContainer>
  );
};

export default HeroDetailsPage;
