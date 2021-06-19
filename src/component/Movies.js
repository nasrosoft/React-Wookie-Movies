import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
    };
  }
  componentDidMount() {
    const that = this;
    axios.defaults.headers.common["Authorization"] = `Bearer Wookie2019`;
    axios
      .get("https://wookie.codesubmit.io/movies")
      .then(function (response) {
        // handle success
        const movies = response.data.movies;
        // const genres = response.data.movies.genres;
        that.setState({ movies });
        // that.setState({ genres: genres });
        console.log("axios", response.data);
        // console.log("state genres", that.state.genres);
      })
      .catch(function (error) {
        // handle error
        console.log("axios error :", error);
      });
  }
  render() {
    return (
      <div>
        {this.state.movies.map((movie) => (
          // this.setState({ genres: movie.genres })
          <div>
            <Link to={`details/`}>
              <h5>{movie.title}</h5>
              <img src={movie.backdrop} width="300" height="200" />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
