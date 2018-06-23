import styled from 'styled-components';
import { TableCell } from 'material-ui';

export const SectionContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 7.6rem);;
  margin-top: 7.6rem;
  padding: 2rem 5rem;
`;

export const SubHeading = styled.p`
  text-align: center;
  font-size: 1.5rem;
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
      font-size: 1.4rem;
    `
}
  }
`;
