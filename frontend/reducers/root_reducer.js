import trainingEvents from './training_events_reducer';
// import training_event_errors from './training_event_errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  trainingEvents,
  // trainingEventErrors,
});

export default rootReducer;