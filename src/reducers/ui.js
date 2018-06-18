import {
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL
} from '../actions';

const defaultState = {
  openAuthModal: false,
  authModalPage: 0
};

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_AUTH_MODAL:
      return {
        openAuthModal: true,
        authModalPage: action.payload.page
      };
    case CLOSE_AUTH_MODAL:
      return {
        ...state,
        openAuthModal: false
      };
    default:
      return state;
  }
};

export default uiReducer;
