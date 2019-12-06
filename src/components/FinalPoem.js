import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poemLines = props.sentences.map((words, key) => {
    return <div key={key}>{Object.values(words).join(' ')}</div>
  })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemLines}
      </section>
    </div>
  );
}

export default FinalPoem;
