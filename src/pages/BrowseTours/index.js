import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Grid, Hidden } from 'material-ui';
import { Explore } from '@material-ui/icons';
import TourCardList from 'Components/TourCardList';
import Header from 'Components/Header';
import FiltersPanel from 'Components/FiltersPanel';
import { SectionContainer, SectionTitle, PurpleText, BlackGrid, StyledGridContainer } from './style';
import { getTours } from '../../utils/selectors';
import { setFilterText, setStartPrice, setStartDate } from '../../actions';

class BrowseTours extends Component {

  componentDidMount() {
    const { setTextFilter } = this.props;
    const text = (this.props.match && this.props.match.params && this.props.match.params.location) || '';
    setTextFilter(text);
  }

  componentWillUnmount() {

  }

  render() {
    return (
  <Fragment>
    <Header fixed />
    <SectionContainer>
      <Grid container>
            <Grid item xs={12} md={9}>
              <Grid container direction="column">
                {this.props.toursRequest === 'READY' && 
                  <BlackGrid container item alignItems="center" xs={12} sm={12} md={8}>
                    <Explore style={{ marginRight: 10 }} /><SectionTitle><span><PurpleText>{this.props.tours && this.props.tours.length} {this.props.tours && this.props.tours.length > 1 ? 'tours' : 'tour'}</PurpleText> {this.props.tours && this.props.tours.length > 1 ? 'encontrados' : 'encontrado'}</span></SectionTitle>
                  </BlackGrid>
                }
                <Grid item xs={12}>
                  <TourCardList tours={this.props.tours} toursRequest={this.props.toursRequest} sideMode />
                </Grid>
                </Grid>
              </Grid>
        <Grid item xs={3}>
        <StyledGridContainer container direction="column">
          <Grid item>
            <Hidden only={['xs', 'sm']}>
            <FiltersPanel />
            </Hidden>
          </Grid>
          <Grid item>
          
          </Grid>
        </StyledGridContainer>
      </Grid>
      </Grid>
    </SectionContainer>
  </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  tours: getTours(state),
  toursRequest: state.tours.status
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: (text) => dispatch(setFilterText(text)),
  setDefaultStartPrice: () => dispatch(setStartPrice(10000)),
  setStartDate: () => dispatch(setStartDate(moment()))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseTours);
