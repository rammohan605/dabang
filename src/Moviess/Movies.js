import React from "react";
import Movie from "../Movies/Movie";
import "./styles.css";
class Movies extends React.Component {
  getMovie = (name, likes, banner) => {
    return <Movie name={name} likes={likes} banner={banner} />;
  };

  render() {
    return (
      <div className="movie-card">
        {this.getMovie(
          "maharshi",
          "128.o5k",
          "https://m.media-amazon.com/images/M/MV5BNzQ3YzkyMjEtNGFmYi00Y2QzLTg4NjItODMzNWQ0NzBiYWEzXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg"
        )}
        {this.getMovie(
          "maharshi",
          "128.o5k",
          "https://m.media-amazon.com/images/M/MV5BNzQ3YzkyMjEtNGFmYi00Y2QzLTg4NjItODMzNWQ0NzBiYWEzXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg"
        )}
        {this.getMovie(
          "maharshi",
          "128.o5k",
          "https://m.media-amazon.com/images/M/MV5BNzQ3YzkyMjEtNGFmYi00Y2QzLTg4NjItODMzNWQ0NzBiYWEzXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg"
        )}
      </div>
    );
  }
}
export default Movies;
