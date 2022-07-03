import React, { Component } from 'react'
import {connect} from 'react-redux'

class ProductItemRedux extends Component {
  render() {

    let {product} = this.props;

    return (
      <div>
            <div className="card text-left">
                <img style={{width: '350px'}} className="card-img-top" src={product.hinhAnh} alt={product.tenSP} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan}</p>
                    <button onClick={()=>{this.props.themGioHang(product)}}  className='btn btn-success' >Thêm Sản Phẩm</button>
                </div>
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
                giaBan: sanPham.giaBan
            }

            let action = {
                type: 'THEM_GIO_HANG',
                spGioHang
            };

            dispatch(action);
        }
    }
}

export default  connect(null,mapDispatchToProps)(ProductItemRedux)