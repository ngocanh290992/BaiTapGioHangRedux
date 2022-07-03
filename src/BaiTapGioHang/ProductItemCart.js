import React, { Component } from 'react'
import {connect} from 'react-redux'

class ProductItem extends Component {
  render() {
    let {sanPhamProps} = this.props;

    return (
      <div className="card text-left text-center">
      <img style={{width:'100%'}} className="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.tenSP} />
      <div className="card-body">
          <h4 className="card-title">{sanPhamProps.tenSP}</h4>
          <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
          <button onClick={() => {this.props.themGioHang(sanPhamProps)}} className='btn btn-success'>Thêm Sản Phẩm</button>
      </div>
  </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      themGioHang: (sanPham) => {
        let spGioHang = { 
          maSP: sanPham.maSP, 
          tenSP: sanPham.tenSP, 
          hinhAnh: sanPham.hinhAnh, 
          soLuong: 1, 
          giaBan: sanPham.giaBan}

          let action = {
            type: 'THEM_GIO_HANG',
            spGioHang
          }

          dispatch(action);
      }
  }
}

export default connect(null,mapDispatchToProps)(ProductItem)
