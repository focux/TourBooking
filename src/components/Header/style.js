import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyledButton } from '../Buttons/style';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: ${prop => prop.theme.gap.small} ${prop => prop.theme.gap.big};
  ${props => props.fixed ?
    `
    position: fixed;
    animation-fill-mode: backwards;
    animation: slideNavbar .2s ease-out;
    box-shadow: 0 2px 15px rgba(0,0,0,.1);
    background-color: #fff;
    color: ${props.theme.black};
    box-shadow: 0 2px 15px rgba(0,0,0,.1);
    `
  :
  `
   position: absolute;
   color: ${props.theme.white};
   `
  }
  

  @keyframes slideNavbar {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const Navigation = styled.nav`
  margin-left: ${props => props.theme.gap.small};
  color: inherit;
`;
export const activeClassName = 'nav-item-active';

export const NavItem = styled(NavLink).attrs({
  activeClassName
})`
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.regular};
  color: inherit;
  position: relative;
  padding: ${props => props.theme.gap.small};
  transition: .2s opacity;

  &:not(:last-child) {
    margin-right: ${props => props.theme.gap.small};
  }

  &:hover {
    opacity: .6;
  }

  &:focus {
    outline: 0;
    opacity: .6;
  }

  &.${activeClassName} {
     
  }
`;

export const Logo = styled.div`
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.medium};
  color: inherit;
  letter-spacing: 0.1rem;
`;

export const RightSide = styled.div`
  display: flex;
  ${StyledButton}:not(:last-child) {
    margin-right: ${(props) => props.theme.gap.small}
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
