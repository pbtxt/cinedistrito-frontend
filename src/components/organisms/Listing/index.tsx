import * as React from "react";
// @ts-ignore
import { ListingMoviesWrapper, SectionName } from "./styles.ts";
// @ts-ignore
import Movie from "../../molecules/MovieCard/index.tsx";
// @ts-ignore
import Header from "../../molecules/Header/index.tsx";
import { movies } from "../../molecules/MovieCard/mockdata";

const items = [
  {
    name: "Cartelera",
    url: "/cartelera",
  },
  {
    name: "Próximamente",
    url: "/pronto",
  },
  {
    name: "Alternativo",
    url: "/alternativo",
  },
];
const ListingComponent = ({}): JSX.Element => {
  return (
    <div>
      <Header items={items} />
      <SectionName>En Cartelera</SectionName>
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
