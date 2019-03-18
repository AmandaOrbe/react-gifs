import React, {Component} from 'react';



class Gif extends Component{

  render(){
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.webp`
    return(

        <img  className="gif" src= {src} alt=""/>


      )
  }
}

export default Gif;

