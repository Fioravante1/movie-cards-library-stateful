import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" />
        </label>
        <select value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input">
          <label data-testid="select-input-label">
            Filtrar por gênero
          </label>
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
