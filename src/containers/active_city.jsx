import React, { Component } from 'react';

// React magic
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  render() {
    debugger
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt=""/>
      </div>
    )
  }
}

// Map redux state to react props
// This function gets the state from the Redux stores and saves it in a prop that can be used by the component

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps, null)(ActiveCity);
