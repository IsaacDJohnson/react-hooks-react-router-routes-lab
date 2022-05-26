import React from "react";
import { movies } from "../data";

function Movies() {

  const allMovies = movies.map((element)=>{
    return <div>
      <h2>{element.title}</h2>
      <h3>{element.time}</h3>
      <ul>
        {element.genres.map((e=>{
          return <li key={element.time}>{e}</li>
        }))}
      </ul>
      </div>
  })

  return <div>
    <h1>Movies Page</h1>
    {allMovies}
  </div>;
}

export default Movies;
