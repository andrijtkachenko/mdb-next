import { Header } from "@/components/Header";
import { StyledForm, StyledInput } from "@/components/StyledForm";
import { useState, useContext } from "react";
import { UserContext } from "./_app";
import { useRouter } from "next/router";
//import { UserContext } from "@/service/userContext";

export default function Login () {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(login, password)
            try {
              const user = await loginUserClient({ login, password });
              window.localStorage.setItem("user", JSON.stringify(user))
              router.replace("/")
              console.log(user);
            } catch (err) {
              console.log(err);
            }
          };
    

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
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        //value={password} 
                        //onChange={(e) => setPassword(e.target.value)} 
                        />
                    </StyledInput>
                    <button type="submit">Увійти</button>
                </StyledForm>
            </main>
        </>
  )
}


export  function  Registration() {
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
  )
}
