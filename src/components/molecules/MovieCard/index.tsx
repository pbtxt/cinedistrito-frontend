import * as React from "react";

import {
  MovieCardContainer,
  MovieCover,
  MovieCoverContainer,
  // @ts-ignore
} from "./styles.ts";

declare interface MovideCardProps {
  image: string;
  name: string;
  genre: string;
  tags: string[];
}

const MovieCard = ({
  image,
  name,
  genre,
  tags,
}: MovideCardProps): JSX.Element => {
  return (
    <MovieCardContainer>
      <MovieCoverContainer>
        <img src={image} alt="cartel-pelicula" />
      </MovieCoverContainer>
      <h1>{name}</h1>
      <span>Genero: {genre} </span>
      <div>
        {tags &&
          tags.map((tag) => {
            return <span>{tag}</span>;
          })}
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
