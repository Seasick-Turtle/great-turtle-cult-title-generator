import React from 'react';

const TitleDisplay = ({ titles }) => {

  return (
    <div className="title-container">
      {
        titles.map(title => {
          return (<span className="titles" key={title}>{title}</span>)
        })
      }
    </div>
  )
}

export default TitleDisplay;