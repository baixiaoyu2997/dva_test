import React, { Component } from "react";
import { connect } from "dva";
import * as apis from "../services/example"
class IndexPage extends Component {
  handleSetName = () => {
    this.props.dispatch({
      type: "indexTest/setName",
      name: "猪猪侠",
    });
  };
  handleSetNameAsync = () => {
    console.log("in");
    this.props.dispatch({
      type: "indexTest/setNameAsync",
      name: "猪猪侠",
    });
  };
  componentDidMount() {
    // apis.testCNode().then(res=>{
    //   console.log(res )
    // })
    apis.mockdata().then(res=>{
      console.log(res)
    })
  }
  testCnode = () => {
    this.props.dispatch({
      type: "indexTest/testCnode",
      payload:'1'
    });
  };
  render() {
    console.log(this.props)
    return (
      <div>
        我是首页
        {this.props.msg}
        <div>{this.props.name}</div>
        <button onClick={this.handleSetName}>setName</button>
        <button onClick={this.handleSetNameAsync}>setNameAsync</button>
        <button onClick={this.testCnode}>testCnode</button>
        <ul>
          {
            this.props.cnodeData.map(item=>{
              return (
              <li>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
const mapState = (state) => {
  console.log(state)
  return {
    msg: "我爱北京天安门", 
    name: state.indexTest.name,
    cnodeData:state.indexTest.cnodeData
  };
};
export default connect(mapState)(IndexPage);
