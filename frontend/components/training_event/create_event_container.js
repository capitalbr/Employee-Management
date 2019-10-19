import React from 'react';
import CreateOrEditEvent from "./create_or_edit_event";

import { connect } from 'react-redux';
import { createTrainingEvent } from "../../actions/training_event_actions";



const mapDispatchToProps = (dispatch) => {
  return ({
    doAction: (event) => dispatch(createTrainingEvent(event))
  })
}

export default connect(null, mapDispatchToProps)(CreateOrEditEvent);