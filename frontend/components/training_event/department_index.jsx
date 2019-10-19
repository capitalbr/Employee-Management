import React from 'react'
import TrainingEventIndexItem from "./training_event_index_item";

const DepartmentIndex = ({ department, name }) => {
  let options = ["date"]
  return (
    <div className="events-list-item">
      <h3>
        <div>
          {name}
        </div>
      </h3>
      {department.map(event => {
        return <TrainingEventIndexItem 
          key = {event.id}
          event={event} 
          name={event.name}
          options={Object.keys(event).filter(ele => !options.includes(ele))} />
      })}
    </div>   
  )
   
}

export default DepartmentIndex;
