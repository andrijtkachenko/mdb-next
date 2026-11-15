import { Header } from "@/components/Header";
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