import React, { Component } from "react";
import { connect } from "dva";
class IndexPage extends Component {
  handleSetName = () => {
    this.props.dispatch({
      type: "indexTest/setName",
      name: "猪猪侠",
    });
  };
  handleSetNameAsync=()=>{
    console.log('in')
    this.props.dispatch({
      type: "indexTest/setNameAsync",
      name: "猪猪侠",
    });
  }
  render() {
    return (
      <div>
        我是首页
        {this.props.msg}
        <div>{this.props.name}</div>
        <button onClick={this.handleSetName}>setName</button>
        <button onClick={this.handleSetNameAsync}>setNameAsync</button>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    msg: "我爱北京天安门",
    name: state.indexTest.name,
  };
};
export default connect(mapState)(IndexPage);
