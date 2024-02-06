import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  width: calc(25% - 20px);
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
  }

  h3 {
    margin: 8px 0;
    font-size: 16px;
    color: ${(props) => props.theme.colors.texts.primary};
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px auto;
  }
`;

export const CharacterNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
`;

export const Divider = styled.div`
  display: flex;
  height: 4px;
  background-color: ${(props) => props.theme.colors.backgrounds.primary};
`

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    fill: red;
  }
`;
