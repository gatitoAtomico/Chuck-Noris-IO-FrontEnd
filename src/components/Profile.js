import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container} from 'reactstrap';

class Profile extends Component {

    render() {

      if(this.props.joke){
  
        return (
            <div>
          <Container>     
              <div className ="row">
              <div className= "col-md-12">
              <div className="card">
                <div className="card bg-dark text-white">
                    <div className = "card-header">
                    <button  className="categorybtn btn-lg btn-default"> <Link to= {'/'}>Change Category</Link></button>
                    </div>
                    <div className="scrollable">
                      <div className="card-body text">
                           <p>{this.props.joke}</p>
                        </div>
                        <div className = "card-footer">
                        <p className="right">Times viewed: {this.props.timesViewed}</p>
                        </div>
                      </div>
                </div>
                </div>   
              </div>
              </div>          
</Container>
      </div>
     
           );
    }

    return (
        <div>
        <Container>
          <div className ="row">
            <div className= "col-md-12">
              <div className="card">
              <div className="card bg-dark text-white">
              <div className = "card-header">
              <button className="categorybtn btn-lg btn-default"> <Link to= {'/'}>Change Category</Link></button>
                    </div>
                <div className="card-body">
                  <h3>Please select a Category</h3>
                </div>
              </div>
              </div>
              </div>
              </div>        
    </Container>
      </div>
               
      );
    }
}

export default Profile;
