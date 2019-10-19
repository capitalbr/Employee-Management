import React from 'react';
import TrainingEventShow from "./training_event_show";

import { connect } from 'react-redux';
import { 
  fetchTrainingEvent,
  clearTrainingEvents
} from "../../actions/training_event_actions";


const mapStateToProps = state => {
  let trainingEvent = Object.values(state.trainingEvents);
  return ({
    trainingEvent
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTrainingEvent: (id) => dispatch(fetchTrainingEvent(id)),
    clearTrainingEvents: () => dispatch(clearTrainingEvents())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingEventShow);