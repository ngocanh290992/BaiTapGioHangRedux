import React, { Component } from 'react'
import '../BaiTapBookingTicket/BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGhe from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe';

export default class BaiTapBookingTicket extends Component {

  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return <div className='' key={index}>
        <HangGhe hangGhe={hangGhe} soHangGhe={index} />
      </div>
    })
  }

  render() {
    return (
      <div className='bookingMovie' style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
        backgroundSize: '100%'
      }}>
        <div style={{ positon: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-8 text-center'>
                <div className='text-warning display-4  mt-2'>ĐẶT VÉ XEM PHIM</div>
                <div className='mt-3 text-light' style={{ fontSize: '35px' }}>Màn hình</div>
                <div className='mt-2 ' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <div className='screen'></div>
                </div>
                <div className='mt-2'>
                  {this.renderHangGhe()}
                </div>

              </div>
              <div className='col-4'>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
