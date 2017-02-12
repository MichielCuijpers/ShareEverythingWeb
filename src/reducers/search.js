export const SET = 'search/SET';
export const RESET = 'search/RESET';

const initialState = {
  query: '',
};

export default function styles(state = initialState, action) {
  switch (action.type) {
    case SET:
      return { ...state, query: action.value };
    case RESET:
      return { ...state, query: '' };
    default:
      return state;
  }
}
