import styled from 'styled-components';
import { Grid, Typography, Button } from 'material-ui';
import { ArrowRightBoldCircleOutline } from 'mdi-material-ui';
import { LocationOn, Search } from '@material-ui/icons';

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
  box-shadow: 0 5px 6px rgba(0,0,0,.4);
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

export const StyledSearchIcon = styled(Search)`
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

export const StyledLocIcon = styled(LocationOn)`

`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1.5px solid ${props => props.theme.black};
  background-color: transparent;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 100;
  letter-spacing: .2px;
  transition: border-bottom .2s ease-out;
  padding: ${props => props.theme.gap.tiny};

  &:focus {
    outline: 0;
    border-bottom: 1.5px solid ${props => props.theme.primaryColor};
  }

  &:placeholder {
    font-weight: 100;
  }

  
`;

