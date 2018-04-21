import styled from 'styled-components';
import { Grid, Typography, Button } from 'material-ui';
import { ArrowRightBoldCircleOutline } from 'mdi-material-ui';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledGrid = styled(Grid)`
&& {
  background-color: white;
  opacity: .8;
}
`;

export const StyledInputGrid = styled(Grid)`
&& {
  padding: 2rem 0;
}
`;

export const StyledBtnGrid = styled(Grid)`
&& {
  padding: 2rem 0;
}
`;

export const StyledTypography = styled(Typography)`
  && {
    font-weight: ${props => props.theme.font.weight.light}
  }
`;

export const StyledNextIcon = styled(ArrowRightBoldCircleOutline)`
  && {
    color: ${props => props.theme.white};
    font-size: 2rem;
    margin-right: ${props => props.theme.gap.tiny}
  }
`;

export const StyledNextBtn = styled(Button)`
&& {
  background-color: ${props => props.theme.primaryColor};
  font-size: 1.4rem;
}
`;

