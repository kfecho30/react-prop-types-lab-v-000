import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <h1>{this.prop.name}</h1> a string — required
      <p>{this.prop.producer}</p> a string — optional
      <p>{this.prop.hasWatermark}</p> a boolean — optional, defaults to false
      <p>{this.prop.color}</p> a string — required, can only be 'white', 'eggshell-white' or 'salmon'
      <p>{this.prop.weight}</p>: a number — required, ranges between 80 and 300
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

var weight_range = [];                                                          
for (var i = 80; i <= 300; i++) {                                               
  weight_range.push(i);                                                         
}

Product.PropTypes = {
  name: PropType.string.isRequired,
  producer: PropType.string,
  hasWatermark: PropType.bool,
  color: PropType.string.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropType.number.oneOf(weight_range).isRequired
}
