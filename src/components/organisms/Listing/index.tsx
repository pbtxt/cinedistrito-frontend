import * as React from "react";
// @ts-ignore
import { ListingMoviesWrapper } from "./styles.ts";
// @ts-ignore
import Movie from "../../molecules/MovieCard/index.tsx";

const ListingComponent = ({}): JSX.Element => {
  return (
    <div>
      lista de peliculas
      <Movie />
    </div>
  );
};

export default ListingComponent;
