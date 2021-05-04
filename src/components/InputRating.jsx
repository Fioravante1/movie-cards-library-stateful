import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          name="avaliacao"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

InputRating.defaultProps = {
  rating: 'undefined',
};

export default InputRating;
