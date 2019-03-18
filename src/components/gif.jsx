import React, {Component} from 'react';



class Gif extends Component{


  render(){
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.webp`
    return(

        <img  className="gif" src= {src} id= {this.props.id} alt="" onClick={this.props.clickFunction}/>


      )
  }
}

export default Gif;

