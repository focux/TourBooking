import React, { Component, Fragment } from 'react';
import Header from 'Components/Header';
import { connect } from 'react-redux';
import { Tabs, Grid, CircularProgress } from 'material-ui';
import { SectionContainer, HeroImage, StyledTab } from './style';

class TourPage extends Component {
  state = {
    currentTour: {},
    tab: 0,
    tabNames: ['Overview', 'Includes', 'Review', 'Host']
  };

  componentDidMount() {
    this.getCurrentTour();
    window.scrollTo(0, 0);
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

  handleTabChange = (e, tab) => this.setState({ tab });

  render() {
    const { image } = this.state.currentTour;
    const { tabNames } = this.state;
    return (
      <Fragment>
        <Header fixed />
        <SectionContainer>
          {!this.state.currentTour.id ?
            <Grid container justify="center" alignItems="center" style={{ position: 'absolute', top: '50%' }}>
              <CircularProgress />
            </Grid>
            :
            <Fragment>
              <HeroImage image={`${image}`} />
              <Tabs
                value={this.state.tab}
                onChange={this.handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                {tabNames.map((name, key) => <StyledTab key={key} label={name} />)}
              </Tabs>
              <Grid container spacing={16} justify="center" style={{ padding: '3rem' }}>
                <Grid item xs={6}><h1>klk</h1></Grid>
                <Grid item xs={3}><h1>klk</h1></Grid>
              </Grid>
            </Fragment>
          }
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

