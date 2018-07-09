import React, { PureComponent, Fragment } from 'react';
import Header from 'Components/Header';
import $ from 'jquery';
import FirstSection from './FirstSection/';
import SecondSection from './SecondSection/';

export default class HomePage extends PureComponent {
  state = {
    fixedNav: false,
    predictions: [],
    searchText: ''
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
      this.setState({ searchText: e.target.value });
      const service = new google.maps.places.AutocompleteService();
      const componentRestrictions	= { country: 'do' };
      service.getPlacePredictions({ input: e.target.value, componentRestrictions }, this.displaySuggestions);
      console.log('jeje');
    } else {
      this.setState({ predictions: [] });
    }
  }

  handleSearch = () => this.props.history.push(`/search/${this.state.searchText}`);

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

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
        <Header fixed={this.state.fixedNav} white={this.state.fixedNav} />
        <FirstSection handleKeyPress={this.handleKeyPress} onChangeSearch={this.onChangeSearch} handleSearch={this.handleSearch} predictions={this.state.predictions} />
        <SecondSection />
      </Fragment>
    );
  }
}
