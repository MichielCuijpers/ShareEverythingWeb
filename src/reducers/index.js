import { combineReducers } from 'redux';
import items from './items';
import search from './search';

export default combineReducers({
  items,
  search,
});
