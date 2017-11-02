import Actions from '../actions';

export const page = (state = {}, action) => {
  switch(action.type) {
    case Actions.PAGE_CHANGE: {
      return Object.assign({}, state, {
          number: action.page
        });
      }
    default:
      return Object.assign({}, state, {
          data: 'Cover Page',
        });
  }
}