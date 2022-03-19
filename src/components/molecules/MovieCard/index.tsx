import * as React from "react";

import {
  MovieCardContainer,
  MovieCover,
  MovieCoverContainer,
  // @ts-ignore
} from "./styles.ts";

const MovieCard = (): JSX.Element => {
  return (
    <MovieCardContainer>
      <MovieCoverContainer>
        <MovieCover
          src="https://www.ecartelera.com/carteles/11100/11185/001_m.jpg"
          alt="cartel-pelicula"
        />
      </MovieCoverContainer>
      <h1>Nombre</h1>
      <span>Genero: </span>
      <div>tags</div>
    </MovieCardContainer>
  );
};

export default MovieCard;
