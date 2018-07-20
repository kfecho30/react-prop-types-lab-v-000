import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <h1>{this.prop.name}</h1>: a string — required
      <p>{this.prop.producer}</p>: a string — optional
hasWatermark: a boolean — optional, defaults to false
color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
weight: a number — required, ranges between 80 and 300
    )
  }
}


