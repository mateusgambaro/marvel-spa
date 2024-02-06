import React from "react";
import { ReactComponent as HeartFilled } from "../../assets/icones/heart/Path.svg";
import { ReactComponent as HeartEmpty } from "../../assets/icones/heart/Path Copy 2@1,5x.svg";
import { ReactComponent as ToggleOn } from "../../assets/toggle/Group 2.svg";
import { ReactComponent as ToggleOff } from "../../assets/toggle/Group 6@1,5x.svg";
import { ReactComponent as SortIcon } from "../../assets/icones/heroi/noun_Superhero_2227044@1,5x.svg";
import {
  FilterButton,
  FiltersContainer,
  SearchBar,
  SearchContainer,
  SearchIconStyled,
  SortAndFilter,
  TextContainer,
  ToggleButton,
} from "./styled";

export const FiltersHome = ({
  onSearchChange,
  onToggleFavorites,
  onToggleSortOrder,
  totalCharacters,
  showOnlyFavorites,
  isSortedAsc,
}) => {
  return (
    <FiltersContainer>
      <SearchContainer>
        <SearchBar
          placeholder="Procure por heróis"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <SearchIconStyled />
      </SearchContainer>
      <TextContainer>
        <p>Encontrados {totalCharacters} heróis</p>
        <SortAndFilter>
          <ToggleButton onClick={onToggleSortOrder}>
            <SortIcon />
            <span>Ordenar por nome - {isSortedAsc ? "A-Z" : "Z-A"}</span>
            {isSortedAsc ? <ToggleOn /> : <ToggleOff />}
          </ToggleButton>
          <FilterButton onClick={onToggleFavorites}>
            {showOnlyFavorites ? <HeartFilled /> : <HeartEmpty />}
            <span>Somente favoritos</span>
          </FilterButton>
        </SortAndFilter>
      </TextContainer>
    </FiltersContainer>
  );
};
