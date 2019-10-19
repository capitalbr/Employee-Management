import * as TrainingEventAPIUtils from "../utils/training_event_utils";

export const RECEIVE_TRAINING_EVENT = "RECEIVE_TRAINING_EVENT";
export const RECEIVE_ALL_TRAINING_EVENTS = "RECEIVE_ALL_TRAINING_EVENTS";

// THUNKS
export const createTrainingEvent = (trainingEvent) => {
  return dispatch => {
    return TrainingEventAPIUtils.createTrainingEvent(trainingEvent)
      .then(trainingEvent => dispatch({ 
        type: RECEIVE_TRAINING_EVENT, 
        trainingEvent 
      }));
  }
}

export const updateTrainingEvent = (trainingEvent) => {
  return dispatch => {
    return TrainingEventAPIUtils.updateTrainingEvent(trainingEvent)
      .then(trainingEvent => dispatch({ 
        type: RECEIVE_TRAINING_EVENT, 
        trainingEvent 
      }));
  }
}

export const fetchTrainingEvent = (id) => {
  return dispatch => {
    return TrainingEventAPIUtils.getTrainingEvent(id)
      .then(trainingEvent => dispatch({
        type: RECEIVE_TRAINING_EVENT,
        trainingEvent
      }));
  }
}

export const fetchTrainingEvents = (query) => {
  return dispatch => {
    return TrainingEventAPIUtils.getTrainingEvents(query)
      .then(trainingEvents => dispatch({
        type: RECEIVE_ALL_TRAINING_EVENTS,
        trainingEvents
      }));
  }
}