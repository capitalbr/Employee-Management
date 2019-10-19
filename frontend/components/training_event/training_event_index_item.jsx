import React from 'react'
import { Link } from "react-router-dom"

const TrainingEventIndexItem = ({event, options, name, shouldLabel}) => {
    return (
      <li className="index-item">
        <Link to={`/training-event/${event.id}`}>{name}</Link>
        <div className="index-item-container">
          { Object.keys(event)
            .filter(ele => !options.includes(ele))
            .map((element, idx) => {
            return <div
              id={`${element}`}
              className="index-item-contents"
              key={`element-${idx}`}>
              <span>{(
                  shouldLabel === true ? element + ":": ""
                )}
              </span>
              {(
                element === "description" ? (
                  <textarea 
                    id="index-item-value"
                    rows="2" 
                    cols="20" 
                    wrap="hard" 
                    value={event[element]}
                    readOnly
                    />
               
                ) : (
                  <div id="index-item-value">{ event[element] } </div>
                )
              )}
              
            </div>
          }) }
        </div>
      </li>
    )
}

export default TrainingEventIndexItem;
