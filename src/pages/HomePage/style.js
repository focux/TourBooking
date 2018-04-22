import styled from 'styled-components';
import { rgba } from 'polished';
import Typed from 'react-typed';
import DownArrIcon from '@material-ui/icons/KeyboardArrowDown';
import { Grid} from 'material-ui';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${props => props.theme.white};
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 75%;
  background-image: linear-gradient(to top, ${prop =>
    rgba(prop.theme.primaryColor, 0)}, ${prop =>
  rgba(prop.theme.primaryColor, 0)}), url('${props => props.image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;


export const SkewBackground = styled.div`
  $klk: #fff;
  background-image: linear-gradient(to top, ${prop =>
    rgba(prop.theme.primaryColor, 0.8)}, ${prop =>
  rgba(prop.theme.secondaryColor, 0.8)});
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: -10%;
  width: 50%;
  height: 100%;
  transform: skewX(160deg);
`;

export const SkewContainer = styled.div`
  transform: skewX(-160deg);
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
      transform: translateY(20px);
    }

    100% {
      transform: translateY(0px);
    }
  }
  && {
    color: ${props => props.theme.white};
    font-size: 40px;
    animation: animateArrow 1.3s ease-out infinite;
  }
`;

export const BottomGrid = styled(Grid)`
  && {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: ${props => props.theme.white};
  }
`;
