import styled from 'styled-components';

export const Typography = styled.div`
  font-size: 5rem;
  font-weight: 400;
  color: ${(props) => props.theme.black};
  letter-spacing: .5px;
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  text-transform: uppercase;
  font-weight: 300;

  &::after {
    content: '';
    height: 5px;
    width: 50%;
    background-color: ${props => props.theme.primaryColor};
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const SmallTitle = styled.h1`
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