import React, { Component } from 'react';
import { Modal, Grid } from 'material-ui';
import { ModalContent, StyledButton } from './style';

const CustomModal = ({
  children,
  open,
  onClose,
  ...others
}) => (
  <Modal
    {...others}
    open={open}
    onClose={onClose}
  >
    <ModalContent>
      <Grid container justify="center" spacing={16}>
        <Grid item container justify="flex-end" sm={12}>
          <StyledButton onClick={onClose} variant="fab" color="secondary" aria-label="close" mini>
            X
          </StyledButton>
        </Grid>
        {children}
      </Grid>
    </ModalContent>
  </Modal>
);

export default CustomModal;
