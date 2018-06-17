import {
  REQUEST_USER_INFO,
  SET_USER_INFO,
  UPDATE_USER_INFO
} from '../actions';

const defaultState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  photo: '',
  cellphone: '',
  whatsapp: false
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
    case UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
};

export default userReducer;
