import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomPanel from 'Components/CustomPanel';
import {
  setFilterText,
  setStartDate,
  setStartPrice
} from '../../actions';
import PriceSlider from './PriceSlider';

class FiltersPanel extends Component {
  state = {
    expanded: ''
  };

  onChangeExpanded = (panel) =>  (e) => this.setState(((prevState) => ({ expanded: prevState.expanded === panel ? '' : panel })));

  render() {
    const { style, className, expanded, startPrice, onChangeExpanded, setStartPrice } = this.props;
    return (
      <div style={style || {}} className={className || ''}>
    <CustomPanel
      name="price"
      title="Max price"
      onChange={this.onChangeExpanded}
      currentExpanded={this.state.expanded}
    >
      <PriceSlider startPrice={startPrice} setStartPrice={setStartPrice} />
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
    )
  }
}

const mapStateToProps = (state) => ({
  startPrice: state.filters.startPrice
});

const mapDispatchToProps = (dispatch) => ({
  setStartPrice: (price) => dispatch(setStartPrice(price.values[0]))
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPanel);
