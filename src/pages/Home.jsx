import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <div className="container">
      <h2 className="title">S.M.A.R.T</h2>
      <div className="text-container">
        <p className="mini-text">Ao integrar dados de filmes à estrutura das Smart Cities, enriquecemos a compreensão da cultura urbana, engajamos os cidadãos e melhoramos os serviços. Explorar o domínio público dos filmes amplia essa integração, oferecendo uma visão enriquecedora para a construção de novas tecnologias desde o início da aplicação, onde a <span className="mini">Herança Compartilhada</span> de domínio público pode ajudar a população na consulta através dos filmes, podendo ser uma ferramenta potente na tomada de decisão na construção de novas tecnologias.
        </p>
      </div>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
