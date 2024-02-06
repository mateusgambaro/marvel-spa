import { ComicCard, ComicList, DetailsComicsContainer } from "./styled";
import ReactLoading from "react-loading";

export const DetailsComics = ({ comics, loading }) => {
  if (loading)
    return <ReactLoading type="spin" color="red" height={100} width={75} />;
  return (
    <DetailsComicsContainer>
      <h3>Últimos lançamentos</h3>
      <ComicList>
        {comics.map((comic) => {
          const imageUrl =
            `${comic.thumbnail.path}.${comic.thumbnail.extension}`.replace(
              "http://",
              "https://"
            );
          return (
            <ComicCard key={comic.id}>
              <img src={imageUrl} alt={comic.title} />
              <p>{comic.title}</p>
            </ComicCard>
          );
        })}
      </ComicList>
    </DetailsComicsContainer>
  );
};

export default DetailsComics;
