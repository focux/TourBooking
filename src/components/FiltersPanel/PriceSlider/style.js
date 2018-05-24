import styled from 'styled-components';
import Rheostat from 'rheostat';

export const StyledRheostat = styled(Rheostat)`
  margin-top: 5px;

  && .rheostat-handle {
    border-radius: 2rem;
    top: 0;
    transform: translateY(calc(-50% + 2.5px));
    border: 0;
    box-shadow: 0 2px 10px rgba(0,0,0,.3);
  }

  && .rheostat-background {
    height: 3px;
    background-color: rgba(0,0,0,.15);
    border: 0;
  }

  && .rheostat-progress {
    height: 3px;
    background-color: ${props => props.theme.primaryColor};
    top: 0;
  }
`;
