import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextArea;
