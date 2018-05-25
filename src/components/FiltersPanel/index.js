import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomPanel from 'Components/CustomPanel';
import PropTypes from 'prop-types';
import {
  setFilterText,
  setStartDate,
  setStartPrice
} from '../../actions';
import PriceSlider from './PriceSlider';

class FiltersPanel extends Component {
  static propTypes = {
    startPrice: PropTypes.number.isRequired,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
    setPrice: PropTypes.func.isRequired,
    tempPrice: PropTypes.number
  }

  static defaultProps = {
    className: '',
    style: {},
    tempPrice: null
  };

  state = {
    expanded: '',
    tempPrice: this.props.startPrice
  };

  onChangeExpanded = (panel) => () => this.setState(((prevState) => ({ expanded: prevState.expanded === panel ? '' : panel })));

  onChangeTempPrice = (price) => this.setState({ tempPrice: price.values[0] });

  render() {
    const {
      style,
      className,
      startPrice,
      setPrice
    } = this.props;
    return (
      <div style={style || {}} className={className || ''}>
        <CustomPanel
          name="price"
          title="Max price"
          onChange={this.onChangeExpanded}
          currentExpanded={this.state.expanded}
          rightTitle={this.state.tempPrice}
        >
          <PriceSlider startPrice={startPrice} setStartPrice={setPrice} onChangeTempPrice={this.onChangeTempPrice} />
        </CustomPanel>
        <CustomPanel
          name="departing"
          title="Departing"
          onChange={this.onChangeExpanded}
          currentExpanded={this.state.expanded}
        >
          Aqui inputs pa el date
        </CustomPanel>
        <CustomPanel
          name="spaces"
          title="Spaces"
          onChange={this.onChangeExpanded}
          currentExpanded={this.state.expanded}
        >
          Aqui inputs pa el spaces
        </CustomPanel>
        <CustomPanel
          name="type"
          title="Tour type"
          onChange={this.onChangeExpanded}
          currentExpanded={this.state.expanded}
        >
          Aqui inputs pa el tour type
        </CustomPanel>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  startPrice: state.filters.startPrice
});

const mapDispatchToProps = (dispatch) => ({
  setPrice: (price) => dispatch(setStartPrice(price.values[0]))
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPanel);
