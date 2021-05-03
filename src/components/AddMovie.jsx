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
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input 
            type="text"
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
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
} */

export default AddMovie;
