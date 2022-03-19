import * as React from "react";
// @ts-ignore
import { ListingMoviesWrapper } from "./styles.ts";
// @ts-ignore
import Movie from "../../molecules/MovieCard/index.tsx";
import { movies } from "../../molecules/MovieCard/mockdata";

const ListingComponent = ({}): JSX.Element => {
  return (
    <div>
      lista de peliculas
      <ListingMoviesWrapper>
        {movies &&
          movies.map((movie, index) => {
            return (
              <Movie
                key={index}
                image={movie.image}
                name={movie.name}
                tags={movie.tags}
                genre={movie.genre}
              />
            );
          })}
      </ListingMoviesWrapper>
    </div>
  );
};

export default ListingComponent;
