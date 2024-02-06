import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/busca/Lupa/Shape@1,5x.svg";

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 3%;
  transition: box-shadow 0.3s ease;

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(255, 21, 16, 0.5);
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const SearchBar = styled.input`
  padding: 18px;
  width: 100%;
  border: none;
  padding-left: 40px;
  transition: border-color 0.3s ease;
  border-radius: 20px;
  background-color: #fdecec;

  &:focus {
    outline: none;
    border-color: #ff1510;
  }
`;

export const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  left: 10px;
  height: 20px;
  width: 20px;
`;

export const FilterButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  span {
    margin-left: 8px;
    color: ${(props) => props.theme.colors.backgrounds.primary};
  }
`;

export const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  span {
    margin-right: 8px;
    color: ${(props) => props.theme.colors.backgrounds.primary};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  p {
    margin: 8px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.texts.tertiary};
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SortAndFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;
