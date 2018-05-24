import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';
import { Explore } from '@material-ui/icons';
import TourCardList from 'Components/TourCardList';
import Header from 'Components/Header';
import { SectionContainer, CustomPaper, SectionTitle, PurpleText, BlackGrid, StyledFiltersPanel } from './style';

class BrowseTours extends Component {
  state = {
    expanded: ''
  };

  onChangeExpanded = (panel) => this.setState(((prevState) => ({ expanded: prevState.expanded === panel ? '' : panel })));

  render() {
    return (
  <Fragment>
    <Header fixed />
    <SectionContainer>
      <Grid container>
            <Grid item xs={9}>
              <Grid container direction="column">
                {this.props.toursRequest === 'READY' && 
                  <BlackGrid container item alignItems="center" xs={6}>
                    <Explore style={{ marginRight: 10 }} /><SectionTitle>{this.props.match && this.props.match.params && this.props.match.params.location ? <span>Found <PurpleText>{this.props.tours && this.props.tours.length} tours</PurpleText> to {this.props.match.params.location}</span> : `Browsing ${this.props.tours && <PurpleText>{this.props.tours.length}</PurpleText>} tours`}</SectionTitle>
                  </BlackGrid>
                }
                <Grid item xs={12}>
                  <TourCardList tours={this.props.tours} toursRequest={this.props.toursRequest} sideMode />
                </Grid>
                </Grid>
              </Grid>
        <Grid item xs={3}>
         <StyledFiltersPanel expanded={this.state.expanded} onChangeExpanded={this.onChangeExpanded} />
        </Grid>
      </Grid>
    </SectionContainer>
  </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  tours: state.tours.data,
  toursRequest: state.tours.status
});

export default connect(mapStateToProps)(BrowseTours);
