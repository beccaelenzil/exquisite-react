import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    };
  }

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  
    const newWords = {
      the1: 'The',
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      the2: 'the',
      adj2: this.state.adj2,
      noun2: this.state.noun2
    };
  
    this.setState({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: ''
      });
  
    this.props.updateWordsCallback(newWords);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input 
              name="adj1" 
              placeholder="adjective"
              value={this.state.adj1} 
              onChange={this.onInputChange}
            />
            <input 
              name="noun1" 
              placeholder="noun"
              value={this.state.noun1} 
              onChange={this.onInputChange}
            />
            <input 
              name="adv" 
              placeholder="adverb"
              value={this.state.adv} 
              onChange={this.onInputChange}
            />
            <input 
              name="verb" 
              placeholder="verb"
              value={this.state.verb} 
              onChange={this.onInputChange}
            />
            the
            <input 
              name="adj2" 
              placeholder="adjective"
              value={this.state.adj2} 
              onChange={this.onInputChange}
            />
            <input 
              name="noun2"
              placeholder="noun" 
              value={this.state.noun2} 
              onChange={this.onInputChange}
            />
          </div>
          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
