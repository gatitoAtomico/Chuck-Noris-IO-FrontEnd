import React, { Component } from 'react';
import {Button, Form, Container} from 'reactstrap';
import { Redirect} from "react-router-dom";
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'joke' : '',
      'timesViewed' : ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const category = event.target.id;
 
  axios.put(category).then(
    res => {
    
      console.log(res.data);
      this.setState({
        joke: res.data.jokeValue,
        timesViewd: res.data.timesViewed  
      });
     
      this.props.setJoke(res.data.jokeValue, res.data.timesViewed);
 

    },
    err => {
      console.log(err);
    }
  )

  }
 
    render() {
  
      if(this.state.joke){

        return <Redirect to={'/profile'} />

    }

      const categories = this.props.Categories;

      if(this.props.Categories){

      return (
        <div>
        <Container>
        <Form >
        <div className= "home-form">
          <div className ="row">
              <div className= "col-md-12">
              <div className="card">
              <div className="card bg-light text-black">
                  <div className = "card-header">
                     <b>CHOOSE A CATEGORY</b>
                  </div>
                  <div className="scrollable">
                <div className="card-body">
                
               {categories.map((category) => 
                <Button id={category}  onClick={this.handleClick} key = {category} className="btn-lg btn-dark btn-block">{category}</Button>
                   )
               }
               </div>
                </div>
                </div>
              </div>
              </div>
              </div>
          </div>   
          </Form>    
    </Container>
    </div>
      )
      }

      return (
        <div>
        <Container>
          <div className ="row">
            <div className= "col-md-12">
              <div className="card">
                <div className="card-body">
                  <h3>Is this some kind of Joke ?</h3>
                </div>
              </div>
              </div>
              </div> 
    </Container>
      </div>
               
      );
    }
  
  }


export default Home