import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameDetail } from "../../redux/actions";
import { Link } from "react-router-dom";

const VideogameDetail = (props) => {
  const videogame = useSelector((state) => state.videogameDetail);
  const dispatch = useDispatch();

  console.log(videogame, "videogame");

  useEffect(() => {
    dispatch(getVideogameDetail(props.match.params.id));
  }, [dispatch]);

  return (
    <>
      <div>
        <Link to="/home">
          <button>Back to Home</button>
        </Link>
      </div>
      <>
        <div>
          <h1>{videogame.name}</h1>
          <img src={videogame.background_image} with="400px" height="400px" />
        </div>
        <div>
          <p>Released: {videogame.released}</p>
          <p>Rating: {videogame.rating}</p>
          <p>Platforms: {videogame.platform?.join(", ")}</p>
          <p>Genres: {videogame.genres?.join(", ")}</p>
          <p>Description: {videogame.description}</p>
        </div>
      </>
    </>
  );
};

export default VideogameDetail;
