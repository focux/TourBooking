import styled from 'styled-components';
import { Tab } from 'material-ui';
import { LocationOn } from '@material-ui/icons';

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

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Subtitle = styled.h5`
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export const BlockTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: ${props => props.theme.gap.tiny} 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,.4);
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.5;
  padding: calc(${props => props.theme.gap.tiny} + .5rem) 0;
`;

export const LocationIcon = styled(LocationOn)`
  && {
    font-size: 1.4rem;
    color: ${props => props.theme.primaryColor};
  }
`;

export const BookingButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  padding: 1.5rem 2rem;
  width: 100%;
  color: #fff;
  border: 0;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: uppercase;
  font-family: 'roboto';
  letter-spacing: 1px;
  transition: opacity .2s ease-out;
  cursor: pointer;

  &:hover, &:focus {
    opacity: .8;
    outline: 0;
  }
`;

export const BookingContent = styled.div`
  border: 1px solid rgba(0,0,0,.1);
  border-bottom: 0;
  padding: 2rem;
`;

export const BookingPrice = styled.h3`
  position: relative;
  font-size: 2.5rem;

  &::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const BookingSpaces = styled.h3`
    font-size: 2.5rem;
    font-weight: 400;
`;

export const BookingTitle = styled.h5`
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: .5px;
`;
