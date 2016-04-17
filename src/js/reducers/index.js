import { combineReducers } from 'redux';
import AppDataReducer from 'reducers/app-initial-data-reducer';
import AppConfigReducer from 'reducers/app-initial-config-reducer';
import ConstructorObjectsReducer from 'reducers/constructor-objects';

const rootReducer = combineReducers({
  state : (state = {}) => state,
  appData            : AppDataReducer,
  appConfig          : AppConfigReducer,
  constructorObjects : ConstructorObjectsReducer,
});

export default rootReducer;