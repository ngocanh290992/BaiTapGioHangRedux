import React, { Component } from 'react'

import {connect} from 'react-redux'

class GioHangRedux extends Component {
  render() {
    return (
      <div>
            <div>
               
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div style={{minWidth:'1000px'}} className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Danh Sách Sản Phẩm</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mã SP</th>
                                            <th>Hình Ảnh</th>
                                            <th>Tên SP</th>
                                            <th>Giá Bán</th>
                                            <th>Số Lương</th>
                                            <th>Thành Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.gioHang.map((spGH,index)=>{
                                            return <tr key={index}>
                                                <td>{spGH.maSP}</td>
                                                <td><img src={spGH.hinhAnh} alt={spGH.maSP} style={{width: 50}}></img></td>
                                                <td>{spGH.tenSP}</td>
                                                <td>{spGH.giaBan}</td>
                                                <td>
                                                    <button style={{height:30, width:30}} className='btn btn-success p-0' onClick={() => {this.props.tangGiamSoLuong(spGH.maSP,false)}} >-</button>
                                                    {spGH.soLuong}
                                                    <button style={{height:30, width:30}} className='btn btn-success p-0' onClick={() => {this.props.tangGiamSoLuong(spGH.maSP,true)}} >+</button>
                                                </td>
                                                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {this.props.xoaGioHang(spGH.maSP)}}>Xóa</button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <td colSpan={'5'}></td>
                                        <td>Tổng tiền</td>
                                        <td>{this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                            return tongTien += spGH.soLuong * spGH.giaBan;
                                        },0).toLocaleString()}</td>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {

            let action = {
                type: 'XOA_GIO_HANG',
                maSP
            };

            dispatch(action)
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            let action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)