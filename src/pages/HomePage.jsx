import { useState } from "react";
import CharacterGrid from "../components/CharacterGrid/CharacterGrid";
import { FiltersHome } from "../components/FiltersHome/FiltersHome";
import Header from "../components/Header/Header";
import useCharacters from "../hooks/useCharacters";
import styled from "styled-components";

const LoadMoreButton = styled.button`
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgrounds.secondary};
  }
`;

const ShowLessButton = styled(LoadMoreButton)`
  background-color: ${({ theme }) => theme.colors.backgrounds.tertiary};
  color: black;
  margin-bottom: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgrounds.secondary};
  }
`;

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const { characters, loading, toggleFavorite, loadMore, showLess, hasMore } =
    useCharacters(searchTerm, orderBy);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleToggleFavorites = () => {
    setShowOnlyFavorites(!showOnlyFavorites);
  };

  const handleToggleSortOrder = () => {
    setOrderBy(orderBy === "name" ? "-name" : "name");
  };

  const filteredCharacters = showOnlyFavorites
    ? characters.filter((character) => character.isFavorite)
    : characters;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: "50px",
      }}
    >
      <Header />
      <FiltersHome
        onSearchChange={handleSearchChange}
        onToggleFavorites={handleToggleFavorites}
        onToggleSortOrder={handleToggleSortOrder}
        totalCharacters={filteredCharacters.length}
        showOnlyFavorites={showOnlyFavorites}
        isSortedAsc={orderBy !== "-name"}
      />
      <CharacterGrid
        characters={filteredCharacters}
        loading={loading}
        onFavoriteToggle={toggleFavorite}
      />
      {hasMore && (
        <LoadMoreButton onClick={loadMore}>Mostrar mais</LoadMoreButton>
      )}
      <ShowLessButton onClick={showLess}>Mostrar menos</ShowLessButton>
      <div
        style={{
          display: "flex",
          backgroundColor: "#FF1510",
          height: "50px",
          width: "100%",
        }}
      />
    </div>
  );
};

export default HomePage;
