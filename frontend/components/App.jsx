import React from 'react';
import TrainingEventIndexContainer from "./training_event/training_event_index_container"
import CreateEventContainer from "./training_event/create_event_container"
import { Route, Switch, Redirect } from 'react-router-dom';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={TrainingEventIndexContainer} />
      <Route exact path="/create-event" component={CreateEventContainer}/>
    </Switch>
  </div>
);

export default App;