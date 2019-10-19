import React from 'react'
import DepartmentIndex from "./department_index"
import { Link } from "react-router-dom"

class TrainingEventIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchTrainingEvents({
      query: "all"
    })
  }

  departmentSort(){
    let departments = {}
    if (this.props.trainingEvents.length > 0){
      this.props.trainingEvents.forEach(event => {
        if (!departments[event.department]) departments[event.department] = [];
        departments[event.department].push(event)
      })
    }
   
    return Object.keys(departments).map((department, idx) => {
      return <DepartmentIndex 
        key={`department-${idx}`}
        department={departments[department]} 
        name={department} />
    })
  }

  render(){
   let departments = this.departmentSort();

    return(
      <div>
        <div className="events box-position">
            <div className="events-container">
              <title>DEPARTMENTS</title>
            <ul className="events-list">
              {departments}
            </ul>
          </div>
        </div>
        <div className="create-event-link box-position">
          <Link to="/create-event">Schedule New Training Event!</Link>
        </div>
      </div>
    )
  }
}

export default TrainingEventIndex;

