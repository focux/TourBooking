export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export const requestUserInfo = () => ({
  type: REQUEST_USER_INFO
});

export const setUserInfo = ({
  firstName,
  lastName,
  email,
  photo,
  _id,
  cellphone,
  whatsapp
}) => ({
  type: SET_USER_INFO,
  payload: {
    firstName,
    lastName,
    email,
    photo,
    cellphone,
    whatsapp,
    id: _id
  }
});

export const updateUserInfo = ({
  firstName,
  lastName,
  email,
  photo,
  cellphone,
  whatsapp
}) => ({
  type: UPDATE_USER_INFO,
  payload: {
    firstName,
    lastName,
    email,
    photo,
    cellphone,
    whatsapp
  }
});
