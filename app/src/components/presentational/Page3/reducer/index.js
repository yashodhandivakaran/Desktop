import Actions from '../../../../actions';

export const page3 = (state = {}, action) => {
  switch(action.type) {
    case Actions.PAGE3_DUMMY_ACTION: {
      return Object.assign({}, state, {
        action_count: action.data,
      });
    }
    default:
      return Object.assign({}, state, {
        data: 'Page 3 data',
        action_count: 0,
      });
  }
}