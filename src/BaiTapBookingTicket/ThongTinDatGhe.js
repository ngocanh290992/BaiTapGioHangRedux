import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/BaiTapBookingActions'

class ThongTinDatGhe extends Component {

  renderDanhSachGheDangDat = () => {
    return this.props.danhSachGheDangDat.map((ghe, index) => {
      return <tr key={index} className='text-warning'>
        <td>{ghe.soGhe}</td>
        <td>{ghe.gia}</td>
        <td><span onClick={() => {
          this.props.huyGhe(ghe)
        }} className='text-danger' style={{ fontSize: 20, cursor: 'pointer' }}>X</span></td>
      </tr>
    })
  }

  render() {
    return (
      <div>
        <div className='mt-5'>
          <div className='text-light' style={{ fontSize: '35px' }}>Danh Sách Ghế Bạn Chọn</div>
        </div>
        <div className='mt-5'>
          <button className='gheDuocChon'></button> <span className='text-light' style={{ fontSize: '25px' }}>ghế đã đặt</span>
          <br />
          <button className='gheDangChon'></button> <span className='text-light' style={{ fontSize: '25px' }}>ghế đang đặt</span>
          <br />
          <button className='ghe ml-0' ></button> <span className='text-light' style={{ fontSize: '25px' }}>ghế chưa đặt</span>
        </div>
        <div className='mt-5'>
          <table className="table text-light " border={2}>
            <thead>
              <tr>
                <th style={{ fontSize: '15px' }}>Số ghế</th>
                <th style={{ fontSize: '15px' }}>Giá</th>
                <th style={{ fontSize: '15px' }}>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.renderDanhSachGheDangDat()}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Tổng Tiền</td>
                <td className='text-warning'>
                  {this.props.danhSachGheDangDat.reduce((tongTien, ghe)=>{
                    return tongTien + ghe.gia;
                  },0).toLocaleString()}
                </td>
              </tr>

            </tfoot>
          </table>

        </div>


      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BaiTapBookingReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = dispatch => {
  return {
    huyGhe: (ghe) => {
      dispatch(huyGheAction(ghe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)