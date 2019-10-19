import React from 'react';
import CreateOrEditEvent from "./create_or_edit_event";

import { connect } from 'react-redux';
import {
  updateTrainingEvent,
  fetchTrainingEvent,
  clearTrainingEvents
} from "../../actions/training_event_actions";

const mapStateToProps = state => {
  let trainingEvent = Object.values(state.trainingEvents)[0];
  return ({
    trainingEvent
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    doAction: (event) => dispatch(updateTrainingEvent(event)),
    fetchTrainingEvent: (id) => dispatch(fetchTrainingEvent(id)),
    clearTrainingEvents: () => dispatch(clearTrainingEvents())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrEditEvent);