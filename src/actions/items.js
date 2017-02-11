import {
  ADD_TO_CART,
  RESET_CART,
} from '../reducers/items';

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
}