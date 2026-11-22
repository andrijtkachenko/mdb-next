import styled from "@emotion/styled";
import { Container } from "./Container";
import { UserContext } from "@/pages/_app";
import { useState, useEffect } from "react";

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
  const [user,setUser] = useState(null);
  //const { "user" } = UserContext(UserContext);

  useEffect(() => {
    const user = window.localStorage.getItem("user")
    if (!user) {
      return
    }
    setUser(JSON.parse(user))
  }, [])
  const onExit =() => {
    window.localStorage.removeItem("user");
    setUser(null)
  }
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
          {!user && (
            <>
            <a href="/login">Вхід</a>
            <a href="/registration">Реєстрація</a>
          </>
          )}
          {user && <a href="/">{user.login}</a>}
          {user && <button onClick={onExit}>Вихіт</button>}
        </nav>
      </HeaderContainer>
    </header>
  );
};
