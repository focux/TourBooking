import React, { Component, Fragment } from 'react';
import Header from 'Components/Header';
import { connect } from 'react-redux';
import { Tabs, Grid, CircularProgress, Hidden } from 'material-ui';
import { openAuthModal } from '../../actions';
import { formatPrice } from '../../utils';
import { SectionContainer, HeroImage, StyledTab, Title, Subtitle, LocationIcon, BlockTitle, Description, BookingButton, BookingContent, BookingPrice, BookingSpaces, BookingTitle, DiscountText } from './style';
import IncrementInput from '../../components/IncrementInput';

class TourPage extends Component {
  state = {
    currentTour: {},
    tab: 0,
    tabNames: ['Overview', 'Includes', 'Review', 'Host'],
    fixedTab: false,
    adults: 1,
    childs: 0,
    totalPersons: 1
  };

  componentDidMount() {
    this.getCurrentTour();
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentDidUpdate() {
    this.getCurrentTour();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const tabPosition = 76 + 450;
    const currentScroll = window.scrollY + 76; // Scroll + Navbar
    const about = $('#about');
    const features = $('#features');
    const review = $('#review');
    const host = $('#host');

    if (currentScroll >= tabPosition) {
      this.setState({ fixedTab: true });
    } else {
      this.setState({ fixedTab: false });
    }

    if (currentScroll >= host.position().top) {
      this.handleTabChange(null, 3);
    } else if (currentScroll >= (review.position().top - 48)) {
      this.handleTabChange(null, 2);
    } else if (currentScroll >= (features.position().top - 48)) {
      this.handleTabChange(null, 1);
    } else if (currentScroll >= (about.position().top - 48)) {
      this.handleTabChange(null, 0);
    } else {
      this.handleTabChange(null, 0);
    }
  }

  getCurrentTour = () => {
    if (this.props.toursRequest === 'READY' && !this.state.currentTour.id) {
      console.log('jejeje')
      this.setState({
        currentTour: this.props.tours.filter((val) => val.id === this.props.match.params.id)[0]
      });
    }
  }

  scrollToSection = (id) => () => {
    let currentId;
    switch (id) {
      case 0:
        currentId = `#about`;
        break;
      case 1:
        currentId = `#features`;
        break;
      case 2:
        currentId = `#review`;
        break;
      case 3:
        currentId = `#host`;
        break;
      default:
        return;
    }
    $('html, body').animate({ scrollTop: $(currentId).offset().top - 48 - 76 }, 'slow');
  }

  handleTabChange = (e, tab) => this.setState({ tab });

  handleIncreaseAdults = () => this.setState((prevState) => ({
    adults: prevState.adults + 1,
    totalPersons: prevState.totalPersons + 1
  }));

  handleDecreaseAdults = () => this.setState((prevState) => ({
    adults: prevState.adults - 1,
    totalPersons: prevState.totalPersons - 1
  }));

  handleIncreaseChilds = () => this.setState((prevState) => ({
    childs: prevState.childs + 1,
    totalPersons: prevState.totalPersons + 1
  }));

  handleDecreaseChilds = () => this.setState((prevState) => ({
    childs: prevState.childs - 1,
    totalPersons: prevState.totalPersons - 1
  }));

  infoColumn = () => {
    const { title, location, description } = this.state.currentTour;
    return (
      <Grid item xs={10} md={6}>
        <Grid container spacing={24} direction="column">
          <Grid item xs={12}>
            <Title>{title}</Title>
            <Subtitle><LocationIcon /> {location}</Subtitle>
          </Grid>
          <Grid item xs={12}>
            <BlockTitle id="about">About the tour</BlockTitle>
            <Description>{description}</Description>
          </Grid>
          <Grid item xs={12}>
            <BlockTitle id="features">Features</BlockTitle>
            <Description>{description}</Description>
          </Grid>
          <Grid item xs={12}>
            <BlockTitle id="review">Review</BlockTitle>
            <Description>{description}</Description>
          </Grid>
          <Grid item xs={12}>
            <BlockTitle id="host">Host</BlockTitle>
            <Description>{description}</Description>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  handleBooking = () => {
    if (!(this.props.user && this.props.user.id)) {
      this.props.openAuthModal();
    } else {
      this.props.history.push(`/booking/${this.props.match && this.props.match.params.id}?a=${this.state.adults}${this.state.childs ? `?c=${this.state.childs}` : ''}`);
    }
  }

  bookingColumn = (notFixed) => {
    const { adultPrice, initialDescount, spaces, totalSpaces } = this.state.currentTour;
    const columnWidth = $('#right-column').width();
    const tabStyle = this.state.fixedTab && !notFixed ? {
      position: 'fixed',
      top: `${76 + 48 + 50}px`,
      width: columnWidth
    } : {};
    return (
      <Grid item xs={10} md={3} id="right-column">
        <div style={tabStyle}>
          <Grid container direction="column">
            <Grid item xs={12}>
              <BookingContent>
                <Grid container spacing={16} alignItems="center">
                  <Grid item xs={6}>
                    <Grid container direction="column" spacing={8}>
                      <Grid item xs={12}>
                        <BookingTitle>Precio</BookingTitle>
                      </Grid>
                      <Grid item xs={12}>
                        <BookingPrice>
                          {formatPrice(adultPrice, true)}
                        </BookingPrice>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container direction="column" spacing={8}>
                      <Grid item xs={12}>
                        <BookingTitle>Cupos</BookingTitle>
                      </Grid>
                      <Grid item xs={12}>
                        <BookingSpaces>{spaces}/{totalSpaces}</BookingSpaces>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="column" spacing={8}>
                      <Grid item xs={12}>
                        <BookingTitle>Adultos</BookingTitle>
                      </Grid>
                      <Grid item xs={12}>
                        <IncrementInput
                          value={this.state.adults}
                          onIncrease={this.handleIncreaseAdults}
                          onDecrease={this.handleDecreaseAdults}
                          maxValue={spaces - this.state.childs}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="column" spacing={8}>
                      <Grid item xs={12}>
                        <BookingTitle>Niños</BookingTitle>
                      </Grid>
                      <Grid item xs={12}>
                        <IncrementInput
                          value={this.state.childs}
                          onIncrease={this.handleIncreaseChilds}
                          onDecrease={this.handleDecreaseChilds}
                          maxValue={spaces - this.state.adults}
                          minValue={0}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </BookingContent>
            </Grid>
            <Grid item xs={12}><BookingButton onClick={this.handleBooking}>Reservar</BookingButton></Grid>
          </Grid>
        </div>
      </Grid>
    );
  }

  render() {
    const { image } = this.state.currentTour;
    const { tabNames, fixedTab } = this.state;
    const currentTabStyle = {
      backgroundColor: '#fff',
      width: '100%',
      zIndex: 1
    };
    const tabStyle = fixedTab ? {
      position: 'fixed',
      top: '76px',
      ...currentTabStyle
    } : { ...currentTabStyle };
    return (
      <Fragment>
        <Header fixed />
        <SectionContainer>
          {this.state.currentTour && !this.state.currentTour.id ?
            <Grid container justify="center" alignItems="center" style={{ position: 'absolute', top: '50%' }}>
              <CircularProgress />
            </Grid>
            :
            <Fragment>
              <HeroImage image={`${image}`} />
              <Tabs
                id="tours-tab"
                value={this.state.tab}
                onChange={this.handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                style={tabStyle}
                centered
              >
                {tabNames.map((name, key) => <StyledTab key={key} label={name} onClick={this.scrollToSection(key)} />)}
              </Tabs>
              <Grid container spacing={16} justify="center" style={{ padding: '3rem' }}>
                {this.infoColumn()}
                <Hidden only={['sm', 'xs']}>
                  {this.bookingColumn()}
                </Hidden>
                <Hidden only={['md', 'lg', 'xl']}>
                  {this.bookingColumn(true)}
                </Hidden>
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
  toursRequest: state.tours.status,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  openAuthModal: () => dispatch(openAuthModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TourPage);

