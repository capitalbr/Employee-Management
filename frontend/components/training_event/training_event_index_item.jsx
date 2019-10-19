import React from 'react'
import { Link } from "react-router-dom"

const TrainingEventIndexItem = ({event, options, name}) => {
    return (
      <li className="index-item">
        <Link to="/">{name}</Link>
        {Object.keys(event)
          .filter(ele => !options.includes(ele))
          .map((element, idx) => {
          return <div
            className="index-item-contents"
            key={`element-${idx}`}>
            <span>{ event[element] } </span>
          </div>
        })}
      </li>
    )
}

export default TrainingEventIndexItem;
