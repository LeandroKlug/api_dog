import React, { Component } from 'react';

export class Select extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind( this );
  }

  onChange( e ) {
    this.setState({
      selected: e.target.value
    });
    this.props.onValueChange( e.target.value );
  }

  render() {
    const options = this.props.options;
    return (
      <select className='select' onChange={ this.onChange } value={this.props.selected} name={this.props.name} id={this.props.id}>
        { options.map( (name, index) => (
          <option value={name} key={index}>{name}</option>
        ))}
      </select>
    );
  }
}

export default Select;
