import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <labe data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          valor={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </labe>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
