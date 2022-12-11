import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SHOW_FAVOURITE,
  ADD_SEARCH_RESULT,
  ADD_MOVIE_TO_LIST,
} from "../actions";
const initialMoviesState = {
  list: [],
  favourites: [],

  showFavourite: false,
};
export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE: {
      console.log("add switch");
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    }
    case REMOVE_FAVOURITE: {
      console.log("remove fav");
      const index = state.favourites.indexOf(action.movie);
      state.favourites.splice(index, 1);
      return {
        ...state,
      };
    }
    case SHOW_FAVOURITE: {
      return {
        ...state,
        showFavourite: action.val,
      };
    }
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}
const initialSearchState = {
  //result:[]
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        showSearchResults: false,
      };
    default:
      return state;
  }
}
const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};
// export default function rootReducer(state = initialRootState, action) {
//   console.log("root reducer");
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
