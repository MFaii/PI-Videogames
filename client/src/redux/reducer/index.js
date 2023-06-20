import {
  FILTER_BY_GENRE,
  FILTER_BY_PLATFORM,
  GET_GENRES,
  GET_PLATFORMS,
  GET_VIDEOGAMES,
} from "../actionTypes";

const initialState = {
  videogames: [],
  allVideogames: [],
  videogameDetail: [],
  genres: [],
  platforms: [],
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
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case FILTER_BY_PLATFORM:
      const allVideogames2 = state.allVideogames;
      const platformFiltered =
        action.payload === "All"
          ? allVideogames2
          : allVideogames2.filter((game) => {
              if (game.platforms.includes(action.payload)) return game;
            });
      return {
        ...state,
        videogames: platformFiltered,
      };
    default:
      return state;
  }
};

export default rootReducer;
