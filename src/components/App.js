import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, showFavourite } from "../actions";
import { connect } from "../index";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
    //console.log("STATE", this.props.store.getState());
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(showFavourite(val));
  };
  render() {
    const { movies, search } = this.props;
    const { list, favourites, showFavourite } = movies;
    let toShow = showFavourite ? favourites : list;
    // console.log("render");

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourite ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              movies
            </div>
            <div
              className={`tab ${showFavourite ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              favs
            </div>
          </div>
          <div className="list">
            {toShow.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {toShow.length === 0 ? (
            <div className="no-movies">no movies to display !</div>
          ) : null}
        </div>
      </div>
    );
  }
}
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
function callback(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connetedAppComponent = connect(callback)(App);
export default connetedAppComponent;
