import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, ${rgba('#7F00FF', 0.7)}, ${rgba('#E100FF', 0.7)}), url('${props => props.image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  color: ${props => props.theme.white};
  font-size: 6rem;
  font-weight: ${props => props.theme.font.weight.bold};

  &::after {
    content: ' ';
    display: block;
    width: 10rem;
    height: 1rem;
    background-color: ${props => props.theme.primaryColor};
    position: relative;
    left: 50%;
    top: 2rem;
    transform: translateX(-50%);
  }
`;

export const PlaceName = styled.h4`
  position: absolute;
  bottom: .6rem;
  right: 1rem;
  font-size: 1.2rem;
  color: ${props => props.theme.lightWhite};
  opacity: .7;
  font-weight: ${props => props.theme.font.weight.light};
`;

