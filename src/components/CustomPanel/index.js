import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from 'material-ui';
import { ExpandMore } from '@material-ui/icons';
import { PanelTitle } from './style';

const CustomPanel = ({ name, title, children, currentExpanded, onChange }) => (
  <ExpansionPanel expanded={currentExpanded === name} onChange={onChange(name)}>
    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
      <PanelTitle>{title}</PanelTitle>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      {children}
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default CustomPanel;
