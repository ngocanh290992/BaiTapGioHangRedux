import React, { Component } from 'react'
import {connect} from 'react-redux'

class ThongTinGame extends Component {
  render() {
    return (
      <div>
        <div className='display-4'>
            BẠN CHỌN: <span className='text-danger'>{this.props.taiXiu ? 'TÀI': 'XỈU'}</span>
        </div>
        <div className='display-4'>
            Số bàn thắng: <span className='text-success'>{this.props.soBanThang}</span>
        </div>
        <div className='display-4'>
            Tổng số bàn chơi: <span className='text-primary'>{this.props.tongSoBanChoi}</span>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    taiXiu: state.stateXucXac.taiXiu,
    soBanThang: state.stateXucXac.soBanThang,
    tongSoBanChoi: state.stateXucXac.tongSoBanChoi
  }
}

export default connect(mapStateToProps)(ThongTinGame)