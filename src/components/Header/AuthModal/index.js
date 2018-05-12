import React from 'react';
import CustomModal from 'Components/CustomModal';
import Login from './Login';

const AuthModal = ({
  openAuthModal,
  handleCloseLoginModal
}) => (
  <CustomModal
    aria-labelledby="auth-modal"
    aria-describedby="Modal for login purpose"
    open={openAuthModal}
    onClose={handleCloseLoginModal}
  >
    <Login />
  </CustomModal>
);

export default AuthModal;
