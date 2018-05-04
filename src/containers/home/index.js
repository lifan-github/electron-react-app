import React, {Component} from 'react';
import {connect} from "react-redux";
import { Row, Col, Modal } from 'antd';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      modalData: {}
    }
  }

  orderList(item){
    this.setState({
      visible: true,
      modalData: item
    });
  }

  handleOk(){
    this.setState({
      visible: false
    });
  }

  handleCancel(){
    this.setState({
      visible: false
    });
  }

  render() {
    const {allNews} = this.props.homeReducers;
    const {modalData} = this.state;
    let result = (allNews.data && allNews.data.results) && allNews.data.results;
    console.log(result,'homeR-222>>>');
    let colElement = result && result.length > 0 && result.map((item, index) => {
      return (
        <Col key={index} className="news-top-col" span={8} onClick={() => this.orderList(item)}>
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
        <Modal
          title={modalData.name}
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
        >
          <Row>
            <Col span={12}>
              <span className='order-left-label'>订单ID: </span>
              <span className="order-right-label">{modalData.id}</span>
            </Col>
            <Col span={12}>
              <span className='order-left-label'>费率: </span>
              <span className="order-right-label">{modalData.manage_fee}</span>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <span className='order-left-label'>价格: </span>
              <span className="order-right-label">{modalData.sell_price}</span>
            </Col>
            <Col span={12}>
              <span className='order-left-label'>功耗: </span>
              <span className="order-right-label">{modalData.power_fee}</span>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <span className='order-left-label'>汇率: </span>
              <span className="order-right-label">{modalData.power_rate}</span>
            </Col>
            <Col span={12}>
              <span className='order-left-label'>库存: </span>
              <span className="order-right-label">{modalData.store}</span>
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}


export default connect((state) => {
  return {
    homeReducers: state.HomeReducers
  }
})(HomePage)