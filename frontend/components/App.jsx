import React from 'react';
import TrainingEventIndexContainer from "./training_event/training_event_index_container"
import CreateEventContainer from "./training_event/create_event_container"
import EditEventContainer from "./training_event/edit_event_container"
import TrainingEventShowContainer from "./training_event/training_event_show_container"
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchEventIndexContainer from "./training_event/search_event_index_container"


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={TrainingEventIndexContainer} />
      <Route exact path="/create-event" component={CreateEventContainer}/>
      <Route exact path={`/edit-event/:trainingEventId`} component={EditEventContainer} />
      <Route exact path="/search" component={SearchEventIndexContainer} />
      <Route 
        exact 
        path="/training-event/:trainingEventId" 
        component={TrainingEventShowContainer}
        />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;