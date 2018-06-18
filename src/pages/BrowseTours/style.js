import styled from 'styled-components';
import { Paper, Grid } from 'material-ui';

export const SectionContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 7.6rem);;
  margin-top: 7.6rem;
  padding: 2rem 5rem;
`;

export const CustomPaper = styled(Paper)`
  margin-bottom: ${props => props.theme.gap.medium};
  padding: ${props => props.theme.gap.small};
`;

export const SectionTitle = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: inherit;
`;

export const PurpleText = styled.span`
  color: ${props => props.theme.primaryColor};
`;

export const BlackGrid = styled(Grid)`
&&& {
  padding: 1rem;
  background-color: #000;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
`;

export const StyledGridContainer = styled(Grid)`
  && {
    position: fixed;
    width: 23%;
  }
`;
