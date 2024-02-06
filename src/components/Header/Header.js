import { HeaderContainer, LogoContainer, TextContainer } from "./styled";
import { ReactComponent as Logo } from "../../assets/logo/Group@1,5x.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <TextContainer>
          <h2>EXPLORE O UNIVERSO</h2>
          <p>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve.
          </p>
        </TextContainer>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
