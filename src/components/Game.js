import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWords: undefined,
      allPreviousWords: [],
      showFinalPoem: false
     }
  }

  updateWords = (newWords) => {

    let allPreviousWords = this.state.allPreviousWords
    allPreviousWords.push(newWords)
    
    //set state
    this.setState({
      currentWords: newWords,
      allPreviousWords: allPreviousWords
    });

  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    const formattedSentence = this.state.currentWords !== undefined ? Object.values(this.state.currentWords).join(' ') : ' '

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission />
        <p className="Game__format-example">
          { formattedSentence }
        </p>
        <h3>Player Submission Form for Player #{this.state.allPreviousWords.length+1}</h3>
        <PlayerSubmissionForm updateWordsCallback={this.updateWords}/>
        
        {this.state.showFinalPoem ? <FinalPoem sentences={this.state.allPreviousWords}/> : "Not currently showing final poem" }

        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" 
            onClick={()=>this.setState({showFinalPoem: true})}
          />
      </div>

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
