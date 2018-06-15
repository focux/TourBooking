export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';

export const requestUserInfo = () => ({
  type: REQUEST_USER_INFO
});

export const setUserInfo = ({
  firstName,
  lastName,
  email,
  photo,
  _id
}) => ({
  type: SET_USER_INFO,
  payload: {
    firstName,
    lastName,
    email,
    photo,
    id: _id
  }
});
