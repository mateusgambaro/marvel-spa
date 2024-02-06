import styled from "styled-components";

export const DetailsComicsContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ComicList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: left;
    color: ${(props) => props.theme.colors.texts.primary};
  }
`;

export const ComicCard = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
  }

  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.texts.primary};
  }
`;
