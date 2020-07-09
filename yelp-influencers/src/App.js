import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import * as Users from './components/users';
import Statistics from './components/pages/Statistics';
import './App.css';

 class App extends Component{

  state={
    selectedCatType: ''
  };

  render(){ 

    return (
      <Router>
      <div className="App">
        <Navbar title='Influencer Recommendations' icon='fab fa-yelp' />
        <div className="container">
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                {this.renderCatSelector()}
                {this.renderSelectedCat(this.state.selectedCatType)}
              </Fragment>
            )} />
            <Route exact path='/statistics' component={Statistics}  />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }

  renderCatSelector(){
    return(
      <div className="form-group top-margin-small">
        <h3 className="card-selector-label">Based On:</h3>
        <select className="card-selector form-control"
          onChange={(e) => {this.setState({selectedCatType: e.target.value})}}>
          <option></option>
          <option>Top_Influencers</option>
          <option>City</option>
          <option>Categories</option>
          <option>Las_Vegas</option>
        </select>
      </div>
    );
  }

  renderSelectedCat(selectedCatType){
    if (!selectedCatType)
      return "Select a Category";
    
    const Category = Users[selectedCatType];

    return <Category />;
  }

}

export default App;
