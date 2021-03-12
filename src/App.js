import React, { Component } from 'react';
import axios from 'axios';

import Select from './Select/Select';
import ImageGrid from './ImageGrid/ImageGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedNames: [],
      selectedBreed: '',
      images: []
    };

    this.onBreedValueChange = this.onBreedValueChange.bind( this );
  }

  componentDidMount() {
    this.getAllBreeds();
  }

  getAllBreeds() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then( breeds => {
      const breedNames = Object.keys( breeds.data.message );
      this.setState({
        breedNames
      })
    });
  }

  onBreedValueChange( value ) {
    this.setState({
      selectedBreed: value
    });

    axios.get(`https://dog.ceo/api/breed/${ value }/images`)
    .then( images => {
      this.setState({
        images: images.data.message
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Meu amigo cão!</h1>
        <Select options={ this.state.breedNames } value={ this.state.selectedBreed } onValueChange={ this.onBreedValueChange } name="breeds" id="breeds" />
        <ImageGrid images={ this.state.images }/>
      </div>
    );
  }
}

export default App;
