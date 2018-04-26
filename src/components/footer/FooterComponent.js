import React, {Component} from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class FooterComponent extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center', backgroundColor: "#fff"}}>
        一脉网络科技有限公司
      </Footer>
    )
  }
}