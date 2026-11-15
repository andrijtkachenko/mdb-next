import { MovieList } from "../components/MovieList";
import { useState } from "react";
import { Pagination } from "../components/Pagiation";
<<<<<<< HEAD
import { Header } from "../components/Header";
=======
import { Header } from "@/components/Header";
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221

export default function Main() {
  const [page, setPage] = useState(2);
  const [pagesCount, setPagesCount] = useState(0);
  console.log(pagesCount);

  return (
    <>
      <Header />
<<<<<<< HEAD
      <h1>Top Movies</h1>
=======
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
      <main>
        <MovieList setPagesCount={setPagesCount} page={page} />
        <Pagination setPage={setPage} pagesCount={pagesCount} page={page} />
      </main>
    </>
  );
}
