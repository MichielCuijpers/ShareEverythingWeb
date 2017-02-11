import {
  ADD_TO_CART,
} from '../reducers/items';

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
