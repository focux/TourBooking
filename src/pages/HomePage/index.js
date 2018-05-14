import React, { PureComponent, Fragment } from 'react';
import Header from 'Components/Header';
import FirstSection from './FirstSection/';
import SecondSection from './SecondSection/';

export default class HomePage extends PureComponent {
  state = {
    fixedNav: false
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const searchBarRef = $('#home-search-bar');
    if (window.scrollY >= searchBarRef.position().top) {
      this.setState({ fixedNav: true });
    } else {
      this.setState({ fixedNav: false });
    }
  }

  render() {
    return (
      <Fragment>
        <Header fixed={this.state.fixedNav} />
        <FirstSection />
        <SecondSection />
      </Fragment>
    );
  }
}
