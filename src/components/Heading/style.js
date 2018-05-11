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
