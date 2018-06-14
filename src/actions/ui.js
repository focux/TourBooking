export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL';
export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL';

export const openAuthModal = (page = 0) => ({
  type: OPEN_AUTH_MODAL,
  payload: { page }
});

export const closeAuthModal = () => ({
  type: CLOSE_AUTH_MODAL
});
