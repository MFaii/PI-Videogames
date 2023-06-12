import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByGenre, getGenres, getVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  const allVideogames = useSelector((state) => state.videogames);
  const genres = useSelector((state) => state.genres);

  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(12);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );
  const [loading, setLoading] = useState(false);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleFilterGenres = (e) => {
    dispatch(filterByGenre(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div>
        <select>
          <option value="All">All</option>
          <option value="Asc">Upward</option>
          <option value="Desc">Falling</option>
        </select>
        <select onChange={(e) => handleFilterGenres(e)}>
          <option value="All">All</option>
          {genres.map((genre) => (
            <option value={genre.name}>{genre.name}</option>
          ))}
        </select>
      </div>
      <Pagination
        videogamesPerPage={videogamesPerPage}
        allVideogames={allVideogames.length}
        pagination={pagination}
      />
      <div>
        {currentVideogames?.map((el) => {
          return (
            <>
              <Link to={"/home/" + el.id}>
                <Card
                  name={el.name}
                  background_image={el.background_image}
                  genres={el.genres}
                  key={el.id}
                  released={el.released}
                  platforms={el.platforms}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
