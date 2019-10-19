import React from 'react';
import SearchEventIndex from "./search_event_index";

import { connect } from 'react-redux';
import { fetchTrainingEvents } from "../../actions/training_event_actions";


const mapStateToProps = state => {
  let trainingEvents;
  if (state.trainingEvents) {
    trainingEvents = Object.values(state.trainingEvents)
  } else {
    trainingEvents = [];
  }
  return ({
    trainingEvents
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTrainingEvents: (query) => dispatch(fetchTrainingEvents(query))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchEventIndex);