import Actions from '../../../../actions';

export const page1 = (state = {}, action) => {
  switch(action.type) {
    case Actions.PAGE1_DUMMY_ACTION: {
      return Object.assign({}, state, {
        action_count: action.data,
      });
    }
    default:
      return Object.assign({}, state, {
        data: 'Page 1 data',
        action_count: 0,
      });
  }
}