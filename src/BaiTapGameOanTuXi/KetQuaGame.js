import React, { Component } from 'react'
import './BTGOanTuXi.css'
import {connect} from 'react-redux'

class KetQuaGame extends Component {
  render() {
    return (
      <div className='ketQua'>
        <div className=' text-warning'>{this.props.ketQua}</div>
        
        <div className=' text-success'>Số bàn thắng: <span className='text-warning'>{this.props.soBanThang}</span></div>
        
        <div className=' text-success'>Số bàn chơi: <span className='text-warning'>{this.props.soBanChoi}</span></div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    soBanThang: state.BTOanTuXiReducer.soBanThang,
    soBanChoi: state.BTOanTuXiReducer.soBanChoi,
    ketQua: state.BTOanTuXiReducer.ketQua
  }
}

export default connect(mapStateToProps)(KetQuaGame)