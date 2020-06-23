import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import delivery from './delivery/reducer';
import deliveryman from './deliveryman/reducer';
import recipient from './recipient/reducer';
import problem from './problem/reducer';

export default combineReducers({
  auth,
  user,
  delivery,
  deliveryman,
  recipient,
  problem,
});
