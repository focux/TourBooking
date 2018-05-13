import React from 'react';
import CustomModal from 'Components/CustomModal';
import Login from './Login';
import SignUp from './SignUp';

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
    {loginPage ? <Login onChangePage={onChangePage} /> : <SignUp onChangePage={onChangePage} />}
  </CustomModal>
);

export default AuthModal;
