import { useState, useEffect } from "react";
import marvelApi from "../api/marvelApi";

const useCharacters = (searchTerm = "", orderBy = "name") => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 20;

  const [favorites, setFavorites] = useState(() => {
    const localFavorites = localStorage.getItem("favorites");
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * limit;
        const response = await marvelApi.get("/characters", {
          params: {
            nameStartsWith: searchTerm ? searchTerm : undefined,
            orderBy: orderBy,
            limit: limit,
            offset: offset,
          },
        });

        let fetchedCharacters = response.data.data.results;
        setHasMore(fetchedCharacters.length === limit);

        if (currentPage === 1) {
          setCharacters(fetchedCharacters);
        } else {
          setCharacters((prevChars) => [...prevChars, ...fetchedCharacters]);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchTerm, orderBy, currentPage]);

  const toggleFavorite = (characterId) => {
    setFavorites((currentFavorites) => {
      const isCurrentlyFavorite = currentFavorites.includes(characterId);

      if (isCurrentlyFavorite) {
        return currentFavorites.filter((id) => id !== characterId);
      } else {
        if (currentFavorites.length < 5) {
          const updatedFavorites = [...currentFavorites, characterId];

          setCharacters((chars) =>
            chars.map((char) => ({
              ...char,
              isFavorite: updatedFavorites.includes(char.id),
            }))
          );

          return updatedFavorites;
        } else {
          alert("Você só pode adicionar até 5 heróis aos favoritos.");
          return currentFavorites;
        }
      }
    });
  };

  const loadMore = () => setCurrentPage((prevPage) => prevPage + 1);
  const showLess = () => setCurrentPage(1);

  return { characters, loading, toggleFavorite, loadMore, showLess, hasMore };
};

export default useCharacters;
