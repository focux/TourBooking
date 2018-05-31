import React, { Component, Fragment } from 'react';
import Header from 'Components/Header';
import { connect } from 'react-redux';
import { SectionContainer, HeroImage } from './style';

class TourPage extends Component {
  state = {
    currentTour: {}
  };

  componentDidMount() {
    this.getCurrentTour();
  }

  componentDidUpdate() {
    this.getCurrentTour();
  }

  getCurrentTour = () => {
    if (this.props.toursRequest === 'READY' && !this.state.currentTour.id) {
      this.setState({
        currentTour: this.props.tours.filter((val) => val.id === parseInt(this.props.match.params.id))[0]
      });
    }
  }

  render() {
    const { image } = this.state.currentTour;
    return (
      <Fragment>
        <Header fixed />
        <SectionContainer>
          <HeroImage image={`${image}`} />
          <h1>klk</h1>
        </SectionContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tours: state.tours.data,
  toursRequest: state.tours.status
});

export default connect(mapStateToProps)(TourPage);

