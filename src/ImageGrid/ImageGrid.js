import React, { Component } from 'react';
import Image from '../Image/Image';

class ImageGrid extends Component {
 
  render() {
    const images = this.props.images;
    let html;

    if ( this.props.images ) {
      html = (
        images.map( (image, index) => (
          <Image source={image} key={ index } />
        )).slice(0, 2)
      );
    } else {
      html = (
        <p>Ops! Não temos imagens</p>
      )
    }
    return (
      <div>
        { html }
      </div>
    );
  }
}

export default ImageGrid;
