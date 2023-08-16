import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./VideogameDetail.css";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

const VideogameDetail = (props) => {
  const videogame = useSelector((state) => state.videogameDetail);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const promise = new Promise((resolve) => {
      resolve("resuelto");
    });
    promise
      .then(() => {
        dispatch(getVideogameDetail(props.match.params.id));
      })
      .then(() => setTimeout(() => setLoading(false), 2000));
  }, [dispatch]);

  return (
    <>
      <>
        {loading ? (
          <div className="loader_container" style={{ height: "100vh" }}>
            <Loader />
          </div>
        ) : (
          <div className="detail">
            <div className="d-top">
              <h1>{videogame.name}</h1>
              <img
                src={videogame.background_image}
                with="400px"
                height="400px"
              />
            </div>
            <div className="description">
              <p>Released: {videogame.released}</p>
              <p>Rating: {videogame.rating}</p>
              <p>Platform(s): {videogame.platform?.join(", ")}</p>
              <p>Genre(s): {videogame.genres?.join(", ")}</p>
              <p>Description: {videogame.description}</p>
            </div>
          </div>
        )}
        <div className="b-back">
          <Link to="/home">
            <button>Back to Home</button>
          </Link>
        </div>
      </>
      <Footer />
    </>
  );
};

export default VideogameDetail;
