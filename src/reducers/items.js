export const ADD_TO_CART = 'items/ADD_TO_CART';
export const RESET_CART = 'items/RESET_CART';

import data from '../data.json';

const initialState = data.map(item => {
  return {
    ...item,
    inCart: false,
  };
});

export default function styles(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state.map(item => {
        const itemCopy = { ...item };

        if (itemCopy.id == action.id) {
          itemCopy.inCart = true;
        }

        return itemCopy;
      });
    case RESET_CART:
      return state.map(item => {
        const itemCopy = { ...item };
        itemCopy.inCart = false;
        return itemCopy;
      })
    default:
      return state;
  }
}
