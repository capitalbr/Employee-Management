import React from 'react';
import CreateEvent from "./create_event";

import { connect } from 'react-redux';
import { createTrainingEvent } from "../../actions/training_event_actions";



const mapDispatchToProps = (dispatch) => {
  return ({
    createTrainingEvents: (event) => dispatch(createTrainingEvent(event))
  })
}

export default connect(null, mapDispatchToProps)(CreateEvent);