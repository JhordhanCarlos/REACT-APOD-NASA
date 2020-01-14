import React from 'react';
class Planetary extends React.Component{



  render(){
    return(
     <>
        <h2>{this.props.title}</h2>  
        <img src={this.props.image} alt={this.props.title} title={this.props.title}/> 
        <p><span>{this.props.copyright}</span> <span>{this.props.date}</span></p> 
        <p>{this.props.content}</p>    
     </>
    );
  }
}

export default Planetary;