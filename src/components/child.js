import React, { Component } from 'react';
import { withRouter } from "dva/router";
class child extends Component {
    handleToIndex=()=>{
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div>我是通用组件</div>
                <button onClick={this.handleToIndex}>首页_child</button>
            </div>
        );
    }
}

export default withRouter(child);