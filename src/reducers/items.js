export const ADD_TO_CART = 'items/ADD_TO_CART';

import data from '../data.json';

const initialState = data.map(item => {
  return {
    ...item,
    inCart: false,
  };
});

export default function styles(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
