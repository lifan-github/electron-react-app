import React, {Component} from 'react';
import {connect} from "react-redux";
import { Row, Col } from 'antd';

class HomePage extends Component {
  render() {
    const {allNews} = this.props.homeReducers;
    let result = (allNews.data && allNews.data.results) && allNews.data.results;
    console.log(result,'homeR-222>>>');
    let colElement = result && result.length > 0 && result.map((item, index) => {
      return (
        <Col key={index} className="news-top-col" span={8}>
          <div className="col-list">
            <div className="col-list-container">
              <Row className="row-header">
                <Col className="col-header-left" span={12}>订单号：{item.id}</Col>
                <Col className="col-header-right" span={12}>下单时间：{item.mining_time}</Col>
              </Row>
              <Row>
                <Col span={12}>
                  <div className="list-img-container">
                    <img className="order-img" src={item.image} alt="img"/>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="list-speeds-container">
                    <span className="orders-speed-text">总算力</span>
                    <span className="orders-speed">{item.power_fee + "THs"}</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      )
    });
    return (
      <div className="home-container">
        <Row className="news-top-row">
          {colElement}
        </Row>
      </div>
    )
  }
}


export default connect((state) => {
  return {
    homeReducers: state.HomeReducers
  }
})(HomePage)