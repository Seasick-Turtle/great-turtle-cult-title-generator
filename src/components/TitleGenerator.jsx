import React, { useState } from 'react';
import TitleDisplay from './TitleDisplay'

const TitleGenerator = () => {
  const [titles, setTitles] = useState(['first title', 'second title', 'third title']);

  return (
    <>
      <div>
        <input type="text" />
        <button>Generate</button>
      </div>
      <TitleDisplay titles={titles} />
    </>
  );
}

export default TitleGenerator;