import React, { Component } from 'react';
import Typed from 'typed.js';

export default class CustomTyped extends Component {
  constructor(props) {
    super(props);
    this.typedRef = null;
    this.setTypedRef = (element) => { this.typedRef = element; };
  }
  componentDidMount() {
    const options = {
      strings: this.props.typedText,
      typeSpeed: 90,
      backSpeed: 60,
      startDelay: 2000
    };
    const typed = new Typed(this.typedRef, options);
  }
  render() {
    return (
      <span ref={this.setTypedRef} />
    );
  }
}
