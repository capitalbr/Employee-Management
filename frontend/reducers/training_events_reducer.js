import { 
  RECEIVE_TRAINING_EVENT, 
  RECEIVE_ALL_TRAINING_EVENTS,
  CLEAR_TRAINING_EVENTS} 
  from '../actions/training_event_actions';
import merge from 'lodash/merge';

const trainingEventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TRAINING_EVENT:
      return merge(
        {}, 
        oldState, 
        { [action.trainingEvent.id]: action.trainingEvent}
        );
    case RECEIVE_ALL_TRAINING_EVENTS:
      return merge({}, action.trainingEvents);
    case CLEAR_TRAINING_EVENTS:
      return {};
    default:
      return oldState;
  }
};

export default trainingEventsReducer;