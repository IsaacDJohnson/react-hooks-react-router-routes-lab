import React from "react";
import { directors } from "../data";

function Directors() {

  const allDirector = directors.map((element)=>{
    return <div>
      <h2>{element.name}</h2>
      <ul>
        {element.movies.map((e=>{
          return <li key={e[0]}>{e}</li>
        }))}
      </ul>
      </div>
  })

  return <div>
    <h1>Directors Page</h1>
    {allDirector}
  </div>;
}

export default Directors;
