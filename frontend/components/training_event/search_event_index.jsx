import React from 'react'
import DepartmentIndex from "./department_index"
import { Link } from "react-router-dom"

class TrainingEventIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      events: []
    }
  }

  handleInput(e){
    e.preventDefault()

    this.setState({
      input: e.currentTarget.value,
      events: this.props.trainingEvents
    })
    this.props.fetchTrainingEvents({
      query: `${e.currentTarget.value}`
    })
   
  }


  render() {

    return (
      <div>
        <div className="events box-position">
          <div className="events-container">
            <title>SEARCH</title>
            <input 
              type="text" 
              value={this.state.input}
              onChange={this.handleInput.bind(this)}
              />
          </div>
          <div>
            <div>
              {this.state.events.map(event => {
                return event.name
              })}
            </div>
          </div>
        </div>
        <div className="create-event-link box-position">
          <Link to="/">Back To Index</Link>
          <Link to="/create-event">Schedule New Training Event!</Link>
        </div>
      </div>
    )
  }
}

export default TrainingEventIndex;

