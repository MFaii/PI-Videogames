import axios from "axios";
import { FILTER_BY_GENRE, GET_GENRES, GET_VIDEOGAMES } from "../actionTypes";

export const getVideogames = () => {
  return async function (dispatch) {
    var videogames = await axios.get("http://localhost:3001/videogames", {});
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: videogames.data,
    });
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    var genres = await axios.get("http://localhost:3001/genres", {});
    return dispatch({ type: GET_GENRES, payload: genres.data });
  };
};

export const filterByGenre = (payload) => {
  return {
    type: FILTER_BY_GENRE,
    payload,
  };
};
