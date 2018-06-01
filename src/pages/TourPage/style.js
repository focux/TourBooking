import styled from 'styled-components';
import { Tab } from 'material-ui';

export const SectionContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 7.6rem);;
  margin-top: 7.6rem;
`;

export const Container = styled.div`
  padding: 2rem;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 45rem;
  background-image: url('${props => props.image}');
  background-position: center;
  background-size: cover;
`;

const labelClass = 'tab__label';
export const StyledTab = styled(Tab).attrs({
  classes: {
    label: labelClass
  }
})`
  .${labelClass} {
    font-size: 1.2rem;
  }
`;
