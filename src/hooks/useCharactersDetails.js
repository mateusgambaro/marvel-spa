import { useState, useEffect } from "react";
import marvelApi from "../api/marvelApi";

export const useCharacterDetails = (characterId) => {
  const [characterDetails, setCharacterDetails] = useState({});
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const localFavorites = localStorage.getItem("favorites");
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      setLoading(true);
      try {
        const detailsResponse = await marvelApi.get(
          `/characters/${characterId}`
        );
        const character = detailsResponse.data.data.results[0];
        setCharacterDetails({
          ...character,
          isFavorite: favorites.includes(character.id),
        });

        const comicsResponse = await marvelApi.get(
          `/characters/${characterId}/comics`,
          {
            params: {
              orderBy: "-onsaleDate",
              limit: 10,
            },
          }
        );
        setComics(comicsResponse.data.data.results);
      } catch (error) {
        console.error("Error fetching character details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [characterId, favorites]);

  const toggleFavorite = (characterId) => {
    setFavorites((currentFavorites) => {
      const isCurrentlyFavorite = currentFavorites.includes(characterId);
      let updatedFavorites;

      if (isCurrentlyFavorite) {
        updatedFavorites = currentFavorites.filter((id) => id !== characterId);
      } else {
        if (currentFavorites.length < 5) {
          updatedFavorites = [...currentFavorites, characterId];
        } else {
          alert("Você só pode adicionar até 5 heróis aos favoritos.");
          return currentFavorites; 
        }
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return { characterDetails, comics, loading, toggleFavorite };
};

export default useCharacterDetails