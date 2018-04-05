import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addName } from "./actions";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: " "
    };
  }
  inputData = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitData = e => {
    e.preventDefault();
    this.props.addName({
      firstName: this.state.firstName
    });
  };
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>
          FirstName:
          <input type="text" name="firstName" onChange={this.inputData} />
          <button type="submit">Submit</button>
        </form>
        {this.props.firstName}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    firstName: state.firstName
  };
}
function mapDisptachToProps(dispatch) {
  return {
    addName: bindActionCreators(addName, dispatch)
  };
}
export default connect(mapStateToProps, mapDisptachToProps)(App);
