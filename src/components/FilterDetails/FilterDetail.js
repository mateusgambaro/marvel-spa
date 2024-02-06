import React from "react";
import {
  FiltersContainer,
  HeaderContainer,
  SearchBar,
  SearchContainer,
  SearchIconStyled,
} from "./styled";
import { ReactComponent as Logo } from "../../assets/logo/Group@1,5x.svg";

export const FilterDetails = () => {
  return (
    <FiltersContainer>
      <HeaderContainer>
        <Logo style={{ width: "40%"}}/>
        <SearchContainer>
          <SearchBar
            placeholder="Procure por heróis"
          />
          <SearchIconStyled />
        </SearchContainer>
      </HeaderContainer>
    </FiltersContainer>
  );
};

export default FilterDetails;
