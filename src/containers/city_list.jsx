import React, { Component } from 'react';
import City from './city';


// React magic
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index';

// This function binds actions to the props of this component
// setCities comes from the setCities from the actions it is imported from the actions folder
// setCities is a fuction that is added to the props and can be called during the react component lifecycle
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}


// Map redux state to react props
// This function gets the state from the Redux stores and saves it in a prop that can be used by the component

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}


class CityList extends Component {

  componentWillMount() {
  // TODO: dispatch an action to load cities!
  // trigger redux action setCities which updates the reudx state store
    this.props.setCities();
  }

  render(){
    return (
      <div className="cities">
        <ul>
           {this.props.cities.map((city) =>  <City city={city} key={city.name} /> )}
        </ul>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CityList);

