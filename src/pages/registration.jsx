import { Header } from "@/components/Header";
<<<<<<< HEAD
import { StyledForm, StyledInput } from "@/components/StyledForm";


export default function Registration () {
       const [login, setLogin] = useState("")
        const [password, setPassword] = useState("")
    
        const onSubmit = (event) => {
            event.preventDefault();
            try {

        } catch (err) {}
            console.log(login, password);
            
        }
    return (
        <>
            <Header />
            <main>
                <h1 >Registration</h1>
                <StyledForm>
                    <h2>Реєстрація</h2>
                    <StyledInput>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </StyledInput>
                    <StyledInput>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </StyledInput>
                    <StyledInput>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </StyledInput>
                    <button type="submit">Зареєструватись</button>
                </StyledForm>
            </main>
        </>
    )
}
=======
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
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
