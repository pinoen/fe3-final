import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  let favourites = JSON.parse(localStorage.getItem('favs'))

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favourites.map(dentist =>
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        )}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
