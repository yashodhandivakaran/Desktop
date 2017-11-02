import Actions from '../../../../actions';

export const page2 = (state = {}, action) => {
  switch(action.type) {
    case Actions.PAGE2_DUMMY_ACTION: {
      return Object.assign({}, state, {
        action_count: action.data,
      });
    }
    default:
      return Object.assign({}, state, {
        data: 'Page 2 data',
        action_count: 0,
      });
  }
}