import React from "react";
import Card from "../Components/Card";



const Favs = () => {

  let favourites = JSON.parse(localStorage.getItem('favs'))

  return (
    <>
      <h1>Dentists Favs</h1>
      {<div className="card-grid">
        {favourites && favourites.map(dentist =>
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        )}
      </div>}
    </>
  );
};

export default Favs;
