import styled from "@emotion/styled";
import { Container } from "./Container";

const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    & nav {
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
    & a {
        text-transform: uppercase;
        font-weight: 700;}
`;



export const Header = () => {
  return (
    <header style={{borderBottom: "2px solid white", marginBottom: "50px", backgroundColor: "black"}}>
      <HeaderContainer>
        <h1>Movie App</h1>
        <nav>
            <a href="/">Головна</a>
            <a href="/login">Вхід</a>
            <a href="/registration">Реєстрація</a>
        </nav>
      </HeaderContainer>
    </header>
  );
};
