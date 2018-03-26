import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyledButton } from '../Button/style';

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
     
  }
`;

export const Logo = styled.div`
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.medium};
  color: ${props => props.theme.white};
  letter-spacing: 0.1rem;
`;

export const RightSide = styled.div`
  display: flex;
  ${StyledButton}:not(:last-child) {
    margin-right: ${(props) => props.theme.gap.small}
  }
`;
