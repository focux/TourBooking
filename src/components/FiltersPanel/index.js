import React from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui';
import { ExpandMore } from '@material-ui/icons';
import { PanelTitle } from './style';
import PriceSlider from './PriceSlider';

const FiltersPanel = ({ style, className, expanded, onChangeExpanded }) => (
  <div style={style || {}} className={className || ''}>
    <ExpansionPanel expanded={expanded === 'price'} onChange={() => onChangeExpanded('price')}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <PanelTitle>Max price</PanelTitle>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <PriceSlider />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'departing'} onChange={() => onChangeExpanded('departing')}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <PanelTitle>Departing</PanelTitle>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        Aqui inputs pa el date
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'spaces'} onChange={() => onChangeExpanded('spaces')}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <PanelTitle>Spaces</PanelTitle>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        Aqui input pa cuanto space ta buscando
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'type'} onChange={() => onChangeExpanded('type')}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <PanelTitle>Tour type</PanelTitle>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        Aqui tour si es experiencia, eco, blabla
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default FiltersPanel;
