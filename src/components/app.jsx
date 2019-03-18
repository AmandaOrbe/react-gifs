import React, {Component} from 'react';
import giphy from 'giphy-api';


import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "7E8tdXIOLbnjsmFH29"
    }
    this.search(" ");
  }

  search = (query) => {
    //API
    //I call giphy with my API key
    giphy('R3WjjCATmxhfkcKZ2BJ14zhY2lhi9y2U').search({
      q: query,
      rating: 'g',
      limit: 10,
    },  (err, result) => {
        // Res contains gif data!
        this.setState({
          gifs: result.data
        })
    });
  }

  handleClick = (event) => {
    console.log(event.target.id)
    this.setState({
          selectedGifId: event.target.id
        })
  }


  changePrincipalGif = (event) => {
    // this.setState({
    //       selectedGifId: result.data
    //     })
  }

  render(){
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />,
          <div className="selected-gif">
             <Gif id={this.state.selectedGifId}/>
          </div>


        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} clickFunction= {this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default App;
