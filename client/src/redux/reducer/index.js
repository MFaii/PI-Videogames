import { FILTER_BY_GENRE, GET_GENRES, GET_VIDEOGAMES } from "../actionTypes";

const initialState = {
  videogames: [],
  allVideogames: [],
  videogameDetail: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case FILTER_BY_GENRE:
      const allVideogames = state.allVideogames;
      const genreFiltered =
        action.payload === "All"
          ? allVideogames
          : allVideogames.filter((game) => {
              if (game.genres.includes(action.payload)) return game;
            });
      return { ...state, videogames: genreFiltered };

    default:
      return state;
  }
};

export default rootReducer;
