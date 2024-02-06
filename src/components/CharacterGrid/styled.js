import styled from "styled-components";

export const CharacterGridContainer = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
