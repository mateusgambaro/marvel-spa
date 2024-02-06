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
  background-color: whitesmoke;

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

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-end;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
