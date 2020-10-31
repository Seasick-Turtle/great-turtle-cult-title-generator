import React from 'react';

const TitleDisplay = ({ titles }) => {

  return (
    <div className="title-container">
      {
        titles ? (
          titles.map(title => {
            return (<span key={title}>{title}</span>)
          })
        ) : null
      }
    </div>
  )
}

export default TitleDisplay;