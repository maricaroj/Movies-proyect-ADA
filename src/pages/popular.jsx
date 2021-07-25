import { useState, useEffect } from "react";
import { URL_API, API_KEY } from "../utils/constants";
import MovieCard from "../components/MovieCard";
import PaginationMovie from "../components/PaginationMovie";
import Footer from "../components/Footer";

const Popular = () =>{
    const [page, setPage] = useState(1);
    const [url, setUrl] = useState([]);
  
    useEffect(() => {
      (async () => {
        const response = await fetch(
          `${URL_API}/movie/popular?api_key=${API_KEY}&languaje=en-US&page=${page}`
        );
        const movies = await response.json();
        setUrl(movies);
      })();
    }, [page]);
  
    const onChangePage = (page) => setPage(page);
  
    return (
      <div>
        <div className="margen">
          <h1>Popular Movies</h1>
          <MovieCard url={url} />
          <PaginationMovie
            currentPage={url.page}
            totalItems={url.total_results}
            onChangePage={onChangePage}
          />
        </div>
        <Footer />
      </div>
    );
}

export default Popular;