import React from "react";
import { addFourite, removeFavourite } from "../actions";
import { data } from "../data";
class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    console.log("click");
    const { movie } = this.props;
    this.props.dispatch(addFourite(movie));
  };
  handleUnFavouriteClick = () => {
    console.log("unfav click");
    const { movie } = this.props;
    this.props.dispatch(removeFavourite(movie));
  };
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="" src={movie.Poster}></img>
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                unfav
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                fav
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
