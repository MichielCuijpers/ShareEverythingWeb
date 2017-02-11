import {
  SET,
  RESET,
} from '../reducers/search';

export const setSearch = (query) => {
  return {
    type: SET,
    value: query
  };
};

export const resetSearch = () => {
  return {
    type: RESET,
  };
};
