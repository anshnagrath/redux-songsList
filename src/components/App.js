import React, { Component } from 'react'; 
import SongsList from './SongsList'
import SongDetails from './SongDetails'


class App extends Component {
  render() {
return(
  <div className="ui container grid">
    <div className="ui row">
      <div className="column eight wide">
        
          <SongsList></SongsList>
        </div>
          <div className="column eight wide">
          <SongDetails></SongDetails>
          </div>
        </div>
      </div>

)
   
}
}

export default App;
