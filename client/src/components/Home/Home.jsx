import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByGenre,
  getGenres,
  getPlatforms,
  getVideogames,
  filterByPlatform,
  orderByName,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Searchbar from "../Searchbar/Searchbar";
import "./Home.css";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();

  const allVideogames = useSelector((state) => state.videogames);
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);

  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(10);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(true);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const promise = new Promise((resolve) => {
      resolve("resuelto");
    });
    promise
      .then(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
        dispatch(getPlatforms());
      })
      .then(() => setTimeout(() => setLoading(false), 3000));
  }, [dispatch]);

  const handleReload = (e) => {
    e.preventDefault();
    window.location.reload(true);
  };

  const handleFilterGenres = (e) => {
    dispatch(filterByGenre(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterPlatforms = (e) => {
    dispatch(filterByPlatform(e.target.value));
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
  };

  return (
    <>
      <div className="title">
        <h1>Videogames</h1>
        <p>Find a videogame</p>
        <Searchbar />
      </div>
      <div className="header">
        <div>
          <p>Alphabetical order</p>
          <select onChange={(e) => handleSort(e)}>
            <option disabled selected>
              Order
            </option>
            <option value="Asc">Upward</option>
            <option value="Desc">Falling</option>
          </select>
        </div>
        <div>
          <p>Filter by Genre</p>
          <select onChange={(e) => handleFilterGenres(e)}>
            <option value="All">All</option>
            {genres.map((genre) => (
              <option value={genre.name}>{genre.name}</option>
            ))}
          </select>
        </div>
        <div>
          <p>Filter by Platforms</p>
          <select onChange={(e) => handleFilterPlatforms(e)}>
            <option value="All">All</option>
            {platforms.map((platform) => (
              <option value={platform.name}>{platform.name}</option>
            ))}
          </select>
          <button onClick={(e) => handleReload(e)}>Reset</button>
        </div>
      </div>
      {loading ? (
        <div className="loader_container">
          <Loader />
        </div>
      ) : (
        <div className="cards">
          {currentVideogames?.map((el) => {
            return (
              <div key={el.id}>
                <Link
                  to={"/videogame/" + el.id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card
                    name={el.name}
                    background_image={el.background_image}
                    genres={el.genres}
                    key={el.id}
                    released={el.released}
                    platforms={el.platforms}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
      <Pagination
        videogamesPerPage={videogamesPerPage}
        allVideogames={allVideogames.length}
        pagination={pagination}
      />
      <Footer />
    </>
  );
};

export default Home;
