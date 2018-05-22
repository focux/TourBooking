import styled from 'styled-components';
import { Paper } from 'material-ui';

export const SectionContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 7.6rem);;
  margin-top: 7.6rem;
  padding: 2rem 5rem;
`;

export const CustomPaper = styled(Paper)`
  padding: 1.8rem;
  margin-right: 5rem;
  position: fixed;
`;
