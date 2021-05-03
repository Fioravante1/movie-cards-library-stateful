import React, { Component } from 'react';

class AddMovie extends Component {
  /* constructor(props) {
    super(props) {

    }
  } */
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
