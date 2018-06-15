import {
  REQUEST_USER_INFO,
  SET_USER_INFO
} from '../actions';

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  photo: '',
  _id: ''
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_USER_INFO:
      return { ...state };

    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
};

export default userReducer;
