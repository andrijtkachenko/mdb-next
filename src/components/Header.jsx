import styled from "@emotion/styled";
import { Container } from "./Container";

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  & nav {
    display: flex;
    align-items: center;
    gap: 20px;
    & a {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

export const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "black",
        borderBottom: "2px solid white",
        marginBottom: "50px",
      }}
    >
      <HeaderContainer>
        <h1>MDB-NEXT</h1>
        <nav>
          <a href="/">Головна</a>
          <a href="/login">Вхід</a>
          <a href="/registration">Реєстрація</a>
        </nav>
      </HeaderContainer>
    </header>
  );
};
