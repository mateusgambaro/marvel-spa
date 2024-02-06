import { useParams } from "react-router-dom";
import { useCharacterDetails } from "../../hooks/useCharactersDetails";
import {
  HeroInfo,
  HeroStats,
  HeroRating,
  HeroFooter,
  HeroContent,
  Title,
  ComicsInfos,
  ComicDetails,
  MoreInfos,
} from "./styled";
import { ReactComponent as HeartIcon } from "../../assets/icones/heart/Path Copy 2@1,5x.svg";
import { ReactComponent as HeartFilled } from "../../assets/icones/heart/Path.svg";
import { ReactComponent as ComicIcon } from "../../assets/icones/book/Group@1,5x.svg";
import { ReactComponent as MovieIcon } from "../../assets/icones/video/Shape@1,5x.svg";
import { ReactComponent as StarIcon } from "../../assets/review/Group 4@1,5x.svg";
export const DetailsTop = ({ characterDetails, onToggleFavorite }) => {
  const comicCount = characterDetails.comics?.available;

  const movieCount = characterDetails.series?.available;
  const rating = 1;

  const handleFavoriteToggle = () => {
    onToggleFavorite(characterDetails.id);
  };

  return (
    <>
      {characterDetails && characterDetails.thumbnail && (
        <HeroInfo>
          <HeroContent>
            <Title>
              <h1>{characterDetails.name}</h1>
              {characterDetails.isFavorite ? (
                <HeartFilled
                  style={{ cursor: "pointer" }}
                  onClick={handleFavoriteToggle}
                />
              ) : (
                <HeartIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleFavoriteToggle}
                />
              )}
            </Title>
            <p>{characterDetails.description}</p>
            <MoreInfos>
              <HeroStats>
                <ComicDetails>
                  <span>Quadrinhos</span>
                  <ComicsInfos>
                    <ComicIcon />
                    <span>{comicCount}</span>
                  </ComicsInfos>
                </ComicDetails>

                <ComicDetails>
                  <span>Filmes</span>
                  <ComicsInfos>
                    <MovieIcon />
                    <span>{movieCount}</span>
                  </ComicsInfos>
                </ComicDetails>
              </HeroStats>
              <HeroRating>
                <p>Rating</p>
                {[...Array(rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </HeroRating>
              <HeroFooter>
                <p>Último quadrinho:</p>
                <span> 13 fev. 2020</span>
              </HeroFooter>
            </MoreInfos>
          </HeroContent>
          <img
            src={`${characterDetails.thumbnail.path}.${characterDetails.thumbnail.extension}`}
            alt={characterDetails.name}
          />
        </HeroInfo>
      )}
    </>
  );
};

export default DetailsTop;
