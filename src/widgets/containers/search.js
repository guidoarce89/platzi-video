import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  state = {
    value: "Guido Arce"
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submitted');
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value
      }
    })
  };

  handleChange = event => {
    this.setState({
      value: this.input.value.replace(' ', '-')
    })
  };

  setInputRef = element => {
    this.input = element;
  };

  render() {
    return (
      <Search
        setRef={this.setInputRef}
        value={this.state.value}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default connect()(SearchContainer);