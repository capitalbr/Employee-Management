import React from 'react'
import { Link } from "react-router-dom"


class CreateEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      name: "",
      description: "",
      department: "",
      duration: "",
      date: "",
      time: "",
      room_number: ""
    }
    this.handleChange.bind(this)
    this.hasUpdated = false;
  }

  componentDidMount(){
    this.id = this.props.match.params.trainingEventId
    if (this.id){
      this.props.clearTrainingEvents();
      this.props.fetchTrainingEvent(this.id)
        .then(() => {
          let stateObject = this.props.trainingEvent;
          this.setState(
            stateObject
          )
        })
    }
  }

  handleChange(e, field){
    e.preventDefault()
    this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleDateChange(e){
    e.preventDefault();
    let value = this.dateShifter(e);
    this.setState({
      "date": value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.doAction({
      id: this.id ? this.id : "", 
      name: this.state.name,
      description: this.state.description,
      department: this.state.department,
      duration: this.state.duration,
      date: this.state.date,
      time: this.state.time,
      room_number: this.state.room_number,
    })
  }

  dateShifter(e){
    let arr = e.currentTarget.value.split(":");
    let year = arr.pop();
    arr.unshift(year);
    return arr.join(":");
  }

  render() {
    return (
      <div className="box-position">
        <div className="create-edit-container">
          <form 
            className="create-event"
            onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Name
              <input 
                type="text"
                value={this.state.name} 
                className="inputs"
                onChange={e => this.handleChange(e, "name")}/>
            </label>
            <label>
              Description
              <textarea
                className="inputs"
                value={this.state.description}
                onChange={e => this.handleChange(e, "description")} />
            </label>
            <label>
              Department
              <input
                className="inputs"
                type="text"
                value={this.state.department}
                onChange={e => this.handleChange(e, "department")} />
            </label>
            <label>
              Duration
              <input
                className="inputs"
                type="text"
                value={this.state.duration}
                onChange={e => this.handleChange(e, "duration")} />
            </label>
            <label>
              Date
              <input
                className="inputs"
                type="date"
                value={this.state.date}
                onChange={this.handleDateChange.bind(this)} />
            </label>
            <label>
              Time
              <input
                className="inputs"
                type="text"
                value={this.state.time}
                onChange={e => this.handleChange(e, "time")} />
            </label>
            <label>
              Room #
              <input
                className="inputs"
                type="number"
                value={this.state.room_number}
                onChange={e => this.handleChange(e, "room_number")} />
            </label>
            <button 
              type="submit">Submit
            </button>
          </form>
          <div className="create-event-link box-position">
            <Link to={`/training-event/${this.id}`}>Back To Show</Link>
            <Link to="/">Training Event Index</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateEvent;
