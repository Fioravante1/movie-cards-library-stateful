import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import Image from './Image';
import InputTextArea from './InputTextArea';
import InputRating from './InputRating';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <InputTitle
          value={ title }
          onChange={ this.handleChange }
        />

        <InputSubtitle
          value={ subtitle }
          onChange={ this.handleChange }
        />

        <Image
          value={ imagePath }
          onChange={ this.handleChange }
        />

        <InputTextArea
          value={ storyline }
          onChange={ this.handleChange }
        />

        <InputRating
          value={ rating }
          onChange={ this.handleChange }
        />

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
