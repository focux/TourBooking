import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: ${prop => prop.theme.gap.small};
`;

export const Navigation = styled.nav``;
export const activeClassName = 'nav-item-active';

export const NavItem = styled(NavLink).attrs({
  activeClassName
})`
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.light};
  color: ${props => props.theme.white};
  position: relative;
  padding: ${props => props.theme.gap.small};
  border-bottom: 2px solid transparent;
  transition: .2s border-bottom;

  &::before {
    content: '';
    width: 0;
    height: 0;
    transition: .2s height ease-out;
  }

  &:not(:last-child) {
    margin-right: ${props => props.theme.gap.big};
  }

  &:hover {
    /* border-bottom: 2px solid ${props => props.theme.secondaryColor}; */
  }

  &.${activeClassName} {
    color: ${props => props.theme.black};
    &::before {
      content: '';
      background-color: ${props => props.theme.white};
      position: absolute;
      top: -3rem;
      left: -.8rem;
      z-index: -99;
      width: 140%;
      height: 8.3rem;
      transform: skewX(160deg);
    }
     
  }
`;

export const Logo = styled.div`
  font-weight: 600;
  font-size: ${props => props.theme.font.size.medium};
  color: ${props => props.theme.white};
  letter-spacing: 0.1rem;
`;
