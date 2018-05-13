import React from 'react';
import CustomModal from 'Components/CustomModal';
import Login from './Login';
import SignUp from './SignUp';

const AuthModal = ({
  openAuthModal,
  handleCloseLoginModal,
  currentPage,
  onChangePage
}) => {
  let page;
  if (currentPage === 2) {
    page = <SignUp onChangePage={onChangePage} />;
  } else if (currentPage === 1) {
    page = <SignUp onChangePage={onChangePage} />;
  } else {
    page = <Login onChangePage={onChangePage} />;
  }
  return (
    <CustomModal
      aria-labelledby="auth-modal"
      aria-describedby="Modal for login purpose"
      open={openAuthModal}
      onClose={handleCloseLoginModal}
    >
      {page}
    </CustomModal>
  );
};

export default AuthModal;
