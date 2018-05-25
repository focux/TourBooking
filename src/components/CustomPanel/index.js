import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from 'material-ui';
import { ExpandMore } from '@material-ui/icons';
import { PanelTitle, PanelThinTitle } from './style';

const CustomPanel = ({ name, title, children, currentExpanded, onChange, rightTitle }) => (
  <ExpansionPanel expanded={currentExpanded === name} onChange={onChange(name)}>
    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
      <PanelTitle>{title}</PanelTitle>
      <PanelThinTitle>{rightTitle}</PanelThinTitle>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      {children}
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default CustomPanel;
