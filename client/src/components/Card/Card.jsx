import React from "react";

const Card = ({ name, background_image, genres, id, released, platforms }) => {
  return (
    <>
      <div>
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <img
          src={background_image}
          alt="videogame"
          width="200px"
          height="250vh"
        />
        <h5>
          Genres:
          {genres.map((genre) => {
            return <p>{genre.charAt(0).toUpperCase() + genre.slice(1)}</p>;
          })}
        </h5>
        <h5>
          Platforms:
          {platforms.map((platform) => {
            return (
              <p>{platform.charAt(0).toUpperCase() + platform.slice(1)}</p>
            );
          })}
        </h5>
      </div>
    </>
  );
};

export default Card;
