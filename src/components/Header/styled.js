import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 8px 0;
    color: ${(props) => props.theme.colors.texts.primary};
  }

  p {
    margin: 8px 0;
    color: ${(props) => props.theme.colors.texts.secondary};
  }
  @media (max-width: 768px) {
    p {
      margin: 8px 0;
      padding: 12px;
      font-size: 12px;
      color: ${(props) => props.theme.colors.texts.secondary};
    }
  }
`;
