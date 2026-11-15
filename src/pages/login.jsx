import { Header } from "@/components/Header";
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