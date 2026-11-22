import { Header } from "@/components/Header";
import { StyledForm, StyledInput } from "@/components/Styled.Form";
import { useState } from "react";
import { createUserClient } from "@/API/createUser";
export default function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassowrd] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await createUserClient({ login, password });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
   return (
    <>
      <Header />
      <main>
        <StyledForm onSubmit={onSubmit}>
          <h2>Реєстрація</h2>
          <StyledInput>
            <label htmlFor="login">Логін</label>
            <input
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              id="login"
              type="text"
            />
          </StyledInput>
          <StyledInput>
            <label htmlFor="password">Пароль</label>
            <input
              value={password}
              onChange={(event) => setPassowrd(event.target.value)}
              id="password"
              type="password"
            />
          </StyledInput>
          <button type="submit">Зареєструватись</button>
        </StyledForm>
      </main>
    </>
  );
}