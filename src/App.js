import React from 'react';
import Planetary from './components/Planetary';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : {}
      }
    }
  

  componentDidMount = () =>{
    const main_url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    fetch(main_url).then(
      response => response.json()
    )
    .then(dados =>  this.setState({data : dados})
    );
  }

  render(){
    console.log("Component state - " , this.state.data);
    const state = this.state.data;
    return (
    <div className="App">
      <header className="App-header">
        <Planetary 
          image={state.url}
          title={state.title}
          copyright={state.copyright}
          date={state.date}
          content={state.explanation}
        />
      </header>
    </div>
  );
  }
}

export default App;
