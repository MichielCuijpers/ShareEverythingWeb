export const ADD_TO_CART = 'items/ADD_TO_CART';
export const RESET_CART = 'items/RESET_CART';
export const ADD_ITEM = 'items/ADD_ITEM';

import data from '../data.json';

const initialState = data.map((item) => {
  return {
    ...item,
    inCart: false,
  };
});

export default function styles(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state.map((item) => {
        const itemCopy = { ...item };

        // as == is needed instead of ===
        // eslint-disable-next-line
        if (itemCopy.id == action.id && !itemCopy.isBooked) {
          itemCopy.inCart = true;
          itemCopy.inCartAmount = action.amount;
        }

        return itemCopy;
      });
    case RESET_CART:
      return state.map((item) => {
        const itemCopy = { ...item };
        itemCopy.inCart = false;
        return itemCopy;
      });
    case ADD_ITEM:
      return state.map((item) => {
        const itemCopy = { ...item };

        // as == is needed instead of ===
        // eslint-disable-next-line
        if (itemCopy.id == action.item.id) {
          itemCopy.description = action.item.description;
          itemCopy.address = action.item.address;
          itemCopy.owner = action.item.owner;
          itemCopy.isBooked = action.item.isBooked;
        }

        return itemCopy;
      });
    default:
      return state;
  }
}
