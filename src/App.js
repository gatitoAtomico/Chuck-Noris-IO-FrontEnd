import './App.css';
import './css/index.css';
import Home from './components/Home';
import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import axios from 'axios';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

 export default class App extends Component {

  
  constructor(props) {

    super(props);
    this.state = {
        Categories : null,
        Joke : null,
        TimesViewed : null
    }
}

 //runs before render method runs 
 componentDidMount = () =>{

  axios.get('categories').then(
    res => {

      this.setState({
        Categories: res.data.categories
      });
      console.log(res);
    },
    err => {
      console.log(err);
    }
  )
};

setJoke = (joke, timesViewed) => {
  this.setState({
    Joke: joke, 
    TimesViewed: timesViewed
  });
 };
 
  render() {
  return (

    <div>
      <BrowserRouter>
            <div className="App">
        <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
              <Route exact path="/" component= {() => <Home setJoke = {this.setJoke}  Categories = {this.state.Categories} />} />
               <Route exact path="/profile" component = { () => <Profile joke = {this.state.Joke} timesViewed = {this.state.TimesViewed} />} />
             </Switch>
                </div>
            </div>
            </div>
    </BrowserRouter>
    </div>
    
  );
}
 }



