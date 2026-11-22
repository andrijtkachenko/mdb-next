import { MovieList } from "../components/MovieList";
import { useState } from "react";
import { Pagination } from "../components/Pagiation";
import { Header } from "@/components/Header";

export default function Main() {
  const [page, setPage] = useState(2);
  const [pagesCount, setPagesCount] = useState(0);
  console.log(pagesCount);

  return (
    <>
      <Header />
      <h1>Top Movies</h1>
      <main>
        <MovieList setPagesCount={setPagesCount} page={page} />
        <Pagination setPage={setPage} pagesCount={pagesCount} page={page} />
      </main>
    </>
  );
}
