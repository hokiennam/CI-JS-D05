import React from 'react'
import Quote from './Components/Quote'
import { quotes } from './quotes'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    this.changeQuote = this.changeQuote.bind(this)
  }
  changeQuote() {
    let index = Math.floor(Math.random() * quotes.length)
    console.log(index)
    this.setState({ ...this.state, index: index })
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.changeQuote} style={{ width: '10vw', height: '10vh', fontSize: 30 ,margin:'auto',display:'block'}}>Change Quote</button>
          <Quote quoteAuthor={quotes[this.state.index].quoteAuthor} quoteText={quotes[this.state.index].quoteText} />
        </div>

      </React.Fragment>
    )
  }
}

export default App;
