import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inViewport: false,
      source: null
    }

    this.observer = null;
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach( entry => {
        console.log(entry); 
        if(entry.isIntersecting) {
          this.setState({
            inViewport: true,
            source: this.props.source
          });
        } else {
          this.setState({
            inViewport: false,
            source: null
          });
        }
      });
    });

    this.observer.observe(this.refs.image);
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.source !== nextProps.source ) {
      this.observer.observe(this.refs.image);
      this.setState({
        source: null,
        inViewport: false
      });
    }
  }

  componentWillUnmount() {
    this.observer.unobserve(this.refs.image);
    this.observer.disconnect();
    this.observer = null;
  }

  render() {
    let className = 'image'
    
    if(this.state.inViewport) {
      className = 'image';
      this.observer.unobserve(this.refs.image);
    } else {
      className = 'image unloaded';
    }

    return (
      <img ref='image' className={ className } src={ this.state.source } alt={this.props.alt} />
    );
  }
}

export default Image;
