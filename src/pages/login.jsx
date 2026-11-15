import { Header } from "@/components/Header";
<<<<<<< HEAD
import { StyledForm, StyledInput } from "@/components/StyledForm";
import { useState } from "react";

export default function Login () {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(login, password)
    }

    return (
        <>
            <Header />
            <main>
                <h1 >Login</h1>
                <StyledForm>
                    <h2>Вхід</h2>
                    <StyledInput>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username"
                        value={login} 
                        onChange={(event) => setLogin(event.target.value)} 
                        //value={login} onChange={(e) => setLogin(e.target.value)} 
                        />
                    </StyledInput>
                    <StyledInput>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" 
                       // value={login} onChange={(e) => setLogin(e.target.value)}
                        />
                    </StyledInput>
                    <StyledInput>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        //value={password} onChange={(e) => setPassword(e.target.value)} 
                        />
                    </StyledInput>
                    <button type="submit">Увійти</button>
                </StyledForm>
            </main>
        </>
    )
}
=======
import { StyledForm, StyledInput } from "@/components/Styled.Form";

export default function Registration() {
  return (
    <>
      <Header />
      <main>
        <StyledForm>
          <h2>Вхід</h2>
          <StyledInput>
            <label htmlFor="login">Логін</label>
            <input id="login" type="text" />
          </StyledInput>
          <StyledInput>
            <label htmlFor="password">Пароль</label>
            <input id="password" type="text" />
          </StyledInput>
          <button type="submit">Увійти</button>
        </StyledForm>
      </main>
    </>
  );
}
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
