import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Tooltip } from 'material-ui';
import { AccountCircle } from '@material-ui/icons';
import { StyledButton } from '../Buttons/style';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
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

export const NavItem = styled.a`
  cursor: pointer;
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

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledAccountIcon = styled(AccountCircle)`
  && {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const menuClassName = 'menu__paper';
export const CustomMenu = styled(Menu).attrs({
  classes: {
    paper: menuClassName
  },
  PopoverClasses: {
    paper: menuClassName
  }
})`
&&&&& {
  ${menuClassName} {
    width: 10rem;
  }
}
`;

const rootMenuItem = 'menu__item-root';
export const CustomMenuItem = styled(MenuItem).attrs({
  classes: {
    root: rootMenuItem
  }
})`
&&&& {
font-size: 1.4rem;
font-weight: 300;
padding: 1 3rem;
}
`;

const tooltipClass = 'tooltip__text';
export const CustomTooltip = styled(Tooltip).attrs({
  classes: {
    open: tooltipClass,
    popper: tooltipClass,
    tooltip: tooltipClass
  }
})`

&&&&&&& {
  font-size: 1.6rem !important;
}
${tooltipClass} {
font-size: 1.6rem;
font-weight: 300;
padding: 1rem;
}
`;

export const CustomMenuLink = styled.a`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
`;
