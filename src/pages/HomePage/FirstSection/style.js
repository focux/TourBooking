import styled from 'styled-components';
import { rgba } from 'polished';
import Typed from 'react-typed';
import DownArrIcon from '@material-ui/icons/KeyboardArrowDown';
import { Grid } from 'material-ui';

export const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, ${rgba('#7F00FF', 0.7)}, ${rgba('#E100FF', 0.7)}), url('${props => props.image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

export const StyledTyped = styled(Typed)`
  color: ${props => props.theme.white};
`;

export const StyledDownArrIcon = styled(DownArrIcon)`
  @keyframes animateArrow {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
  && {
    color: ${props => props.theme.white};
    font-size: 40px;
    animation: animateArrow 1s ease-out infinite;
  }
`;

export const BottomGrid = styled(Grid)`
  && {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    text-align: center;
    color: ${props => props.theme.white};
  }
`;

