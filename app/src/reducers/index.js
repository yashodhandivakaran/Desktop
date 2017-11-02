import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { page } from './page';
import { page1 } from '../components/presentational/Page1/reducer';
import { page2 } from '../components/presentational/Page2/reducer';
import { page3 } from '../components/presentational/Page3/reducer';



const reducer = combineReducers({
  routing: routerReducer,
  page,
  page1,
  page2,
  page3
});

export default reducer;
