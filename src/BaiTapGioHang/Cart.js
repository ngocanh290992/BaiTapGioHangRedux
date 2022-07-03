import React, { Component } from 'react'

export default class Cart extends Component {

    renderCart = () => {
        let {gioHang} = this.props;
        return gioHang.map((sp, index) => {
            return <tr key={index}>
                <td>{sp.maSP}</td>
                <td><img style={{width: 50}} src={sp.hinhAnh} alt={sp.maSP} /></td>
                <td>{sp.tenSP}</td>
                <td>{sp.donGia.toLocaleString()}</td>
                <td>
                    <button style={{height:30, width:30}} className='btn btn-success p-0' onClick={() => {this.props.tangGiamSoLuong(-1,sp.maSP)}} >-</button>
                     {sp.soLuong.toLocaleString()} 
                    <button style={{height:30, width:30}} className='btn btn-success p-0' onClick={() => {this.props.tangGiamSoLuong(1, sp.maSP)}} >+</button>
                </td>
                <td>{(sp.soLuong * sp.donGia).toLocaleString()}</td>
                <td><button onClick={() => {this.props.xoaGioHang(sp.maSP)}} className='btn btn-danger' >Xóa</button></td>
            </tr>
        })
    }

    tinhTongTien = () => {
        return this.props.gioHang.reduce((tongTien, spGioHang, index) => {
            return tongTien += spGioHang.donGia * spGioHang.soLuong;
        },0).toLocaleString();
    }

  render() {

    // let {gioHang} = this.props;
    
    return (
      <div>
            <div>
               
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div style={{minWidth:'1000px'}} className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
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
                                            <th>Đơn Giá</th>
                                            <th>Số Lượng</th>
                                            <th>Thành Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {this.renderCart()}
                                    </tbody>
                                    <tfoot>
                                        <td colSpan={'5'}></td>
                                        <td>Tổng tiền</td>
                                        <td>{this.tinhTongTien()}</td>
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
