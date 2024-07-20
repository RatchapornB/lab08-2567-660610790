import React from 'react'

export default function Task(props) {
  const status = (isDone) => {
    if(isDone === true) {
      return "line-through";
    } else {
      return "";
    }
  }

  return (
    <div>
      <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span style={{textDecoration: status(props.isDone)}}>{props.title}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
    </div>
  )
}
