import axios from "axios";
import {
  FILTER_BY_GENRE,
  FILTER_BY_PLATFORM,
  GET_DETAIL,
  GET_GENRES,
  GET_NAMES,
  GET_PLATFORMS,
  GET_VIDEOGAMES,
  ORDER_BY_NAME,
} from "../actionTypes";

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

export const getPlatforms = () => {
  return async function (dispatch) {
    var platforms = await axios.get("http://localhost:3001/platforms", {});
    return dispatch({
      type: GET_PLATFORMS,
      payload: platforms.data,
    });
  };
};

export const filterByPlatform = (payload) => {
  return {
    type: FILTER_BY_PLATFORM,
    payload,
  };
};

export const getVideogameDetail = (id) => {
  return async function (dispatch) {
    var videogameDetail = await axios.get(
      `http://localhost:3001/videogames/${id}`
    );
    return dispatch({
      type: GET_DETAIL,
      payload: videogameDetail.data,
    });
  };
};

export const getVideogameName = (name) => {
  return async function (dispatch) {
    var videogameDetail = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    return dispatch({
      type: GET_NAMES,
      payload: videogameDetail.data,
    });
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};
