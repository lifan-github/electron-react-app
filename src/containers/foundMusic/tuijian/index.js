import React, {Component} from 'react';
import {connect} from "react-redux";
import Swiper from './Swiper';
import HotSelected from './HotSelected';
import {getMusic} from '../../../redux/actions/MusicActions';

class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    // this.props.dispatch(getMusic())
  }

  render() {
    console.log(this.props.allMusic,'-----');
    const {allMusic} = this.props.allMusic;
    return (
      <div className="container">
        <Swiper/>
        <HotSelected musicData={allMusic}/>
      </div>
    )
  }
}

export default connect((state) => {
  console.log(state.MusicReducers,'推荐');
  return {
    allMusic: state.MusicReducers
  }
})(Recommended)