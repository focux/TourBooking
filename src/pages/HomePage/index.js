import React, { PureComponent, Fragment } from 'react';
import Header from 'Components/Header';
import FirstSection from './FirstSection/';
import SecondSection from './SecondSection/';

export default class HomePage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <FirstSection />
        <SecondSection />
      </Fragment>
    );
  }
}
