import styled from 'styled-components';

export const Container = styled.a`
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
  height: 20rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 0;
  border-radius: 4px;
  overflow: hidden;

  &:hover > div::after {
    animation: titleAnimation .3s ease-out;
    animation-fill-mode: forwards;
  }

  &:hover::after {
    opacity: .5;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.85);
    z-index: 0;
    transition: opacity .3s ease-out;
  }

  @keyframes titleAnimation {
    50% {
      transform: scaleX(2) translateX(-25%);
    }

    100% {
      transform: scaleX(2) scaleY(7) translateX(-25%) translateY(-60%);
    }
  }
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex-direction: column;
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 5px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.primaryColor};
    z-index: 0;
  }
`;

export const Title = styled.h1`
font-size: 2.5rem;
color: rgba(255, 255, 255, .8);
letter-spacing: 1px;
font-weight: 200;
position: relative;
padding: 1rem;
z-index: 2;
`;

export const IconContainer = styled.div`
  color: ${props => props.theme.primaryColor};
  & > svg {
    font-size: 4rem;
  }
`;
