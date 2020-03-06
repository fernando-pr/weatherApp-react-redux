import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

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
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='subtitle1' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtended city={'ciudad hardcode'}></ForecastExtended>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default App;
