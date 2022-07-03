import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import ProductListRedux from './ProductListRedux'
import {connect} from 'react-redux'

class BTGHRedux extends Component {

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSoLuong,spGH,index) => {
            return tongSoLuong += spGH.soLuong;
        },0);
    }
  render() {
    return (
      <div className='container'>
        <h3 className='text-center' >Danh Sách Sản Phẩm</h3>
        <div className='text-right'>
            <span style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
            <i class="fa fa-cart-plus"></i>({this.renderSoLuong()})  Giỏ Hàng
            </span>
        </div>
        
        <ProductListRedux/>

        <GioHangRedux/>

      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(BTGHRedux)
