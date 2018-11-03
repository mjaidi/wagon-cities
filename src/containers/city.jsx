import React, { Component } from 'react';

// React magic
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeCityFunction } from '../actions/index';

// This function binds actions to the props of this component
// activeCityFunction comes from the activeCityFunction from the actions it is imported from the actions folder
// activeCityFunction is a fuction that is added to the props and can be called during the react component lifecycle
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { activeCityFunction: activeCityFunction },
    dispatch
  );
}

class City extends Component {
  handleClick = () => {
    this.props.activeCityFunction(this.props.city);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>{this.props.city.name}</li>
    );
  }
}

export default connect(null, mapDispatchToProps)(City);
