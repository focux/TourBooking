import {
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL,
  CLOSE_SALES_BAR
} from '../actions';

const defaultState = {
  openAuthModal: false,
  authModalPage: 0,
  showSaleBar: true,
  salePrice: 249
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
    case CLOSE_SALES_BAR:
      return {
        ...state,
        showSaleBar: false
      };
    default:
      return state;
  }
};

export default uiReducer;
