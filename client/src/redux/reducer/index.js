import {
  FILTER_BY_GENRE,
  FILTER_BY_PLATFORM,
  GET_GENRES,
  GET_PLATFORMS,
  GET_VIDEOGAMES,
  GET_DETAIL,
  GET_NAMES,
  ORDER_BY_NAME,
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
    case GET_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    case GET_NAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case ORDER_BY_NAME:
      let sortedVideogames =
        action.payload === "Asc"
          ? state.allVideogames.sort(function (a, b) {
              if (a.name > b.name) return 1;

              if (b.name > a.name) {
                return -1;
              }
            })
          : state.allVideogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return { ...state, videogames: sortedVideogames };
    default:
      return state;
  }
};

export default rootReducer;
