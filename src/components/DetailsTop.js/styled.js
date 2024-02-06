import styled from "styled-components";

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%;
  color: white;

  p {
    text-align: justify;
    padding: 0 100px;
    color: ${(props) => props.theme.colors.texts.secondary};
  }

  @media (max-width: 768px) {
  width: 80%;

    p {
      padding: 0 !important;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  h1 {
    padding: 0 40px;
    color: ${(props) => props.theme.colors.texts.primary};
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  height: 100%;
  width: 100%;

  img {
    width: 400px;
    padding: 100px;
  }
  background-color: ${(props) => props.theme.colors.backgrounds.tertiary};

  @media (max-width: 768px) {
    display: flex;
    padding: 0;
    gap: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
    }
  }
`;

export const ComicDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  span {
    color: ${(props) => props.theme.colors.texts.secondary};
    font-weight: 500;
  }
`;

export const ComicsInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const MoreInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    padding: 0;
    gap: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  span {
    color: ${(props) => props.theme.colors.texts.primary};
  }
`;

export const HeroRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    color: ${(props) => props.theme.colors.texts.primary};
    font-weight: 500;
  }
`;

export const HeroFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    color: ${(props) => props.theme.colors.texts.primary};
    font-weight: 500;
  }

  span {
    color: ${(props) => props.theme.colors.texts.primary};
    font-weight: 300;
  }
`;
