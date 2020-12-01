import './App.css';
import React from 'react'
import { Main } from './Components/Main'
import { Search } from './Components/Search'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.search = this.search.bind(this)
  }
  // search(){
  // api_key=${keyApi}&q=${e.target.value}
  // }
  search = (e) => {
    if (e.key == 'Enter') {
      const url_target =
        "https://api.globalgiving.org/api/public/projectservice/featured/projects?";

      const api_key = "b85ce2c1-3e20-435e-aca8-0fb6467a1b40";

      const url = `${url_target}?api_key=${api_key}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }).then(res => res.json())
        .then(data => {
          console.log(data)
        }).catch(err => console.log(err))
    }
  }
  render() {
    return (
      <div className="App border">
        <Search search={this.search} />
        <Main books={this.state.books ? this.state.books : []} />
      </div>
    );
  }
}

export default App;
