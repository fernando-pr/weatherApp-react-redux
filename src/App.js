import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
"Sanlucar de Barrameda, ES",
"New york city, US",
"Yakutsk, RU",
"Buenos Aires,ar",
"Washington,us",
"Ciudad de Mexico, mx",
"Lima,pe",
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`city ${city}`)
  };

  render(){
    return (
      <div className="App">
        <LocationList
         cities={cities}
         onSelectedLocation={this.handleSelectedLocation}
         />
      </div>
      
    );
  }
}


export default App;
