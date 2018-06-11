import React, { PureComponent, Fragment } from 'react';
import Header from 'Components/Header';
import FirstSection from './FirstSection/';
import SecondSection from './SecondSection/';

export default class HomePage extends PureComponent {
  state = {
    fixedNav: false,
    predictions: []
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

  onChangeSearch = (e) => {
    if (e.target.value) {
      const service = new google.maps.places.AutocompleteService();
      service.getQueryPredictions({ input: e.target.value }, this.displaySuggestions);
      console.log('jeje');
    } else {
      this.setState({ predictions: [] });
    }
  }

  displaySuggestions = (predictions, status) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      return;
    }
    console.log(predictions);
    this.setState({ predictions });
  };

  render() {
    return (
      <Fragment>
        <Header fixed={this.state.fixedNav} />
        <FirstSection onChangeSearch={this.onChangeSearch} predictions={this.state.predictions} />
        <SecondSection />
      </Fragment>
    );
  }
}
