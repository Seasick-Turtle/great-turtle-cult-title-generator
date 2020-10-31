import React, { useState } from 'react';
import TitleDisplay from './TitleDisplay'
import TitleData from '../data/titles.json'

const TitleGenerator = () => {
  const [titles, setTitles] = useState([]);

  const generateTitles = () => {
    let randomArr = [];
    let num;

    while (randomArr.length < 3) {
      num = Math.floor(Math.random() * Math.floor(9));
      randomArr.push(num);

      randomArr = checkDuplicates(randomArr, num);

    }
    retrieveTitles(randomArr);
  }

  const checkDuplicates = (arr, num) => {

    if (arr.length >= 2) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
          arr.splice(i + 1, 1);
        } else if (arr.length > 2 && arr[i] === arr[i + 2]) {
          arr.splice(i + 2, 1);
        }
      }
    }

    return arr;
  }

  const retrieveTitles = (arr) => {
    let results = [];
    arr.forEach(num => {
      results.push(TitleData.data[num]);
    })

    setTitles(results);
  }

  console.log(titles)
  return (
    <>
      <div className="title-inputs">
        <button className="title-button" onClick={generateTitles}>Generate</button>
      </div>
      <TitleDisplay titles={titles} />
    </>
  );
}

// TODO: Allow user to input name for titles with name in it
// <input type="text" />

export default TitleGenerator;