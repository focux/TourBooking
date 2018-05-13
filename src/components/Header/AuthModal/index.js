import React from 'react';
import CustomModal from 'Components/CustomModal';
import Login from './Login';

const AuthModal = ({
  openAuthModal,
  handleCloseLoginModal,
  loginPage,
  onChangePage
}) => (
  <CustomModal
    aria-labelledby="auth-modal"
    aria-describedby="Modal for login purpose"
    open={openAuthModal}
    onClose={handleCloseLoginModal}
  >
    {loginPage ? <Login onChangePage={onChangePage} /> : 'test'}
  </CustomModal>
);

export default AuthModal;
