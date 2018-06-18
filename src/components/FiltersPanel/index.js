import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomPanel from 'Components/CustomPanel';
import PropTypes from 'prop-types';
import DateInput from 'Components/DateInput';
import moment from 'moment';
import { Checkbox } from 'material-ui';
import { SelectInput, StyledMenuItem } from 'Components/Inputs';
import {
  setFilterText,
  setStartDate,
  setStartPrice
} from '../../actions';
import PriceSlider from '../PriceSlider';
import { formatPrice, displayNumDate } from '../../utils';

class FiltersPanel extends Component {
  static propTypes = {
    startPrice: PropTypes.number.isRequired,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
    setPrice: PropTypes.func.isRequired,
    setDate: PropTypes.func.isRequired,
    startDate: PropTypes.instanceOf(moment).isRequired
  }

  static defaultProps = {
    className: '',
    style: {}
  };

  state = {
    expanded: '',
    tempPrice: this.props.startPrice,
    date: this.props.startDate,
    focused: false,
    selectedTourTypes: [],
    tourTypes: ['Ecoturismo', 'Experiencias']
  };

  onChangeExpanded = (panel) => () => this.setState(((prevState) => ({ expanded: prevState.expanded === panel ? '' : panel })));

  onChangeTempPrice = (price) => this.setState({ tempPrice: price.values[0] });

  onDateChange = (date) => {
    this.setState({ date });
    this.props.setDate(date);
  }

  onFocusChange = ({ focused }) => this.setState({ focused });

  onChangeTourType = (e) => this.setState((prevState) => (
    {
      selectedTourTypes: [...prevState, ...e.target.value]
    }
  ));

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
          title="Precio maximo"
          onChange={this.onChangeExpanded}
          currentExpanded={this.state.expanded}
          rightTitle={formatPrice(this.state.tempPrice, true)}
        >
          <PriceSlider startPrice={startPrice} setStartPrice={setPrice} onChangeTempPrice={this.onChangeTempPrice} />
        </CustomPanel>
        <CustomPanel
          name="departing"
          title="A partir de"
          onChange={this.onChangeExpanded}
          currentExpanded={this.state.expanded}
          rightTitle={displayNumDate(this.state.date)}
        >
          <DateInput
            id="filter-input"
            currentDate={this.state.date}
            focused={this.state.focused}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
          />
        </CustomPanel>
        {/* <CustomPanel
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
          rightTitle={this.state.selectedTourTypes.join(', ')}
        >
          <SelectInput
            value={this.state.selectedTourTypes}
            onChange={this.onChangeTourType}
            renderValue={selected => selected.join(', ')}
            inputProps={{
              name: 'tourType',
              id: 'tourType'
            }}
            autoWidth
            multiple
          >
            {this.state.tourTypes.map((type) => (
              <StyledMenuItem key={type} value={type}>
                <Checkbox checked={this.state.selectedTourTypes.indexOf(type) > -1} />
                {type}
              </StyledMenuItem>
              ))
            }
          </SelectInput>
          </CustomPanel> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  startPrice: state.filters.startPrice,
  startDate: state.filters.startDate
});

const mapDispatchToProps = (dispatch) => ({
  setPrice: (price) => dispatch(setStartPrice(price.values[0])),
  setDate: (date) => dispatch(setStartDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPanel);
