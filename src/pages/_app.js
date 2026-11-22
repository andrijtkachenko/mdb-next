import "@/styles/globals.css";
import { createContext, useState } from "react";

export const UserContext = createContext()

export default function App({ Component, pageProps }) {
  const [user, setUser ] = useState([]);
  console.log(user)
  return (
    <UserContext>
      <Component/>
    </UserContext>
  )
}
