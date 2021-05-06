import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import Image from './Image';
import InputTextArea from './InputTextArea';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.onclickFunction = this.onclickFunction.bind(this);
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

  onclickFunction() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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

        <SelectGenre
          value={ genre }
          onChange={ this.handleChange }
        />

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onclickFunction }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
