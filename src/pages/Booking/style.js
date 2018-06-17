import styled from 'styled-components';
import { StepLabel, TableCell } from 'material-ui';

export const SectionContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 7.6rem);;
  margin-top: 7.6rem;
  padding: 4rem 5rem;
`;

const labelClass = 'label-custom-style';
const labelText = 'label-custom-text';
export const CustomStepLabel = styled(StepLabel).attrs({
  classes: {
    iconContainer: labelClass,
    label: labelText
  }
})`
  .${labelClass} > svg {
    width: 3rem;
    height: 3rem;
  }

  .${labelText} {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

export const StepContent = styled.div`
  padding-bottom: ${props => props.theme.gap.small};
  margin-top: ${props => props.theme.gap.small};
`;

export const StepContentTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  position: relative;
  padding-left: ${props => props.theme.gap.small};
  margin-bottom: ${props => props.theme.gap.medium};

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 3px;
    background-color: ${props => props.theme.primaryColor};
    top: 0;
    left: 0;
  }
`;

export const CustomLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 300;
`;

const tableCellHead = 'custom-table-head';
export const CustomTableCell = styled(TableCell).attrs({
  classes: {
    head: tableCellHead
  }
})`
  && {
    ${props => props.type === 'header' ?
    `
      background-color: #000;
      color: #fff;
      letter-spacing: .5px;
      font-size: 1.4rem;
    `
    :
    `
      font-size: 1.2rem;
    `
}
  }
`;

export const InfoTitle = styled.h3`
  font-size: 1.6rem;
`;

export const InfoBody = styled.p`
  font-size: 1.2rem;
`;
