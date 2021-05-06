import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.changeLibrary = this.changeLibrary.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  changeLibrary({ target }) {
    return target;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          onSearchTextChange={ this.changeLibrary }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeLibrary }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeLibrary }
        />

        <MovieList movies={ movies } />

        <AddMovie />
      </>

    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
