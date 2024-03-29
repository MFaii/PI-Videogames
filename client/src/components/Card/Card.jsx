import React from "react";
import "./Card.css";

const Card = ({ name, background_image, genres, id, released, platforms }) => {
  return (
    <>
      <div className="card">
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <img src={background_image} alt="videogame" />
        <h5>
          <p>Genre(s): {genres?.join(", ")}</p>
          <p>Platform(s): {platforms?.join(", ")}</p>
        </h5>
      </div>
    </>
  );
};

export default Card;
