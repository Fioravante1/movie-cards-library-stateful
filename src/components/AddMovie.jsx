import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ title }
          />
        </label>
        <labe data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            valor={ subtitle }
            data-testid="subtitle-input"
            onChange={ subtitle }
          />
        </labe>
        <label data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            onChange={ imagePath }
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ storyline }
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ rating }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select 
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ genre }
          > 
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>

          </select>
        </label>
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
} */

export default AddMovie;
