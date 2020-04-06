import React, { Component } from "react";
import { Link } from "dva/router";
import Child from '../components/child'
class userPage extends Component {
  handleToIndex = () => {
    this.props.history.push('/')
  };
  render() {
    return (
      <>
        <div>
          <Link to="/">首页</Link>
          <button onClick={this.handleToIndex}>跳转</button>
          <Child></Child>
        </div>
      </>
    );
  }
}

export default userPage;
