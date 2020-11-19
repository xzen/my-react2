import { combineReducers } from 'redux';

import data from './components/home/data/reducer';
import caddy from './components/caddy/reducer';

export default combineReducers({
  data,
  caddy
});
