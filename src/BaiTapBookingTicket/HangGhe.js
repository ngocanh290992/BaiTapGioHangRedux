import React, { Component } from 'react'
import {connect} from 'react-redux'
import { datGheAction } from '../redux/actions/BaiTapBookingActions';

class HangGhe extends Component {

  renderSoGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGhe = "";
      let disable = false;
      if (ghe.daDat) {
        cssGhe = "gheDuocChon";
        disable = true;
      };

      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
      if(indexGheDangDat !== -1){
        cssGheDangDat = 'gheDangChon';
      }


      return <button onClick={()=>{
        this.props.datGhe(ghe)
      }} disabled={disable} className={`ghe ${cssGhe} ${cssGheDangDat}`} key={index}>
        {ghe.soGhe}
      </button>
    })
  }

  renderRowNumber = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      return <button className='rowNumber' key={index}>
        {ghe.soGhe}
      </button>
    })
  }

  render() {
    if (this.props.soHangGhe === 0) {
      return <div className='text-light'>
        {this.props.hangGhe.hang} {this.renderRowNumber()}
      </div>
    } else {
      return <div className='text-light'>
          {this.props.hangGhe.hang} {this.renderSoGhe()}
        </div>
    }

  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BaiTapBookingReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = dispatch => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe))
    },
    
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(HangGhe)
