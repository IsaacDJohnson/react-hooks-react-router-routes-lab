import React from "react";
import { actors } from "../data";

function Actors() {

  const allActors = actors.map((element)=>{
    return <div>
      <h2 key={element.name}>{element.name}</h2>
      <ul>
        {element.movies.map((e=>{
          return <li key={element.title}>{e}</li>
        }))}
      </ul>
      </div>
  })


  return <div>
    <h1>Actors Page</h1>
    {allActors}
    </div>;
}

export default Actors;
