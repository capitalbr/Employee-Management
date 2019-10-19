import React from 'react'
import { Link } from "react-router-dom"
import TrainingEventIndexItem from "./training_event_index_item"

class TrainingEventShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trainingEvent: {
        name: "",
        description: "",
        department: "",
        duration: "",
        date: "",
        time: "",
        room_number: ""
      }
    }
  }

  componentDidMount(){
    this.id = this.props.match.params.trainingEventId;
    this.props.clearTrainingEvents();
    this.props.fetchTrainingEvent(this.id)
      .then(() => {
        this.setState({
          trainingEvent: this.props.trainingEvent[0]
        })
      })
  }

  render() {
    return (
      <div className="event-show box-position">
        <div className="event-show-container">
          <TrainingEventIndexItem
            shouldLabel={true}
            event={ this.state.trainingEvent }
            name={ this.state.trainingEvent.name }
            options={["id"]} />
          <div className="create-event-link box-position">
            <Link to={`/edit-event/${this.id}`}>Edit This Event</Link>
            <Link to="/">Training Event Index</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default TrainingEventShow;

