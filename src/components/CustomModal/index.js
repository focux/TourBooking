import React from 'react';
import { Grid, Slide } from 'material-ui';
import { ModalContent, StyledButton, StyledModal } from './style';

const CustomModal = ({
  children,
  open,
  onClose,
  ...others
}) => ( 
  <StyledModal
    {...others}
    open={open}
    onClose={onClose}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999999999
    }}
  >
    <Slide in={open}>
      <ModalContent>
        <Grid container justify="center" spacing={16}>
          <Grid item container justify="flex-end" xs={12}>
            <StyledButton onClick={onClose} variant="fab" color="secondary" aria-label="close" mini>
              X
            </StyledButton>
          </Grid>
          {children}
        </Grid>
      </ModalContent>
    </Slide>
  </StyledModal>
);

export default CustomModal;
