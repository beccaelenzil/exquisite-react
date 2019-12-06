import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const formattedPoem = () => {
    const poemLines = props.sentences.map((words) => {
      return <li>Object.values(words).join(' ')</li>
    })
    console.log(poemLines)
    return poemLines
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {formattedPoem}
      </section>
    </div>
  );
}

export default FinalPoem;
