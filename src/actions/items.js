import {
  ADD_TO_CART,
  RESET_CART,
} from '../reducers/items';

export const addToCart = ({ id, amount }) => {
  return {
    type: ADD_TO_CART,
    id,
    amount,
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
