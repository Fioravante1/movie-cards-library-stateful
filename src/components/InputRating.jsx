import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          name="avaliacao"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ rating }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default InputRating;

// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
