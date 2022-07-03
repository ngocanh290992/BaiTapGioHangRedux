import React, { Component } from 'react'
import Cart from './Cart'
import ProductListCart from './ProductListCart'

export default class BaiTapGioHang extends Component {

    state = {
        gioHang: [
        ]
    }

    themGioHang = (sanPham) => {
        
        let spGioHang = {
            maSP: sanPham.maSP, 
            hinhAnh: sanPham.hinhAnh, 
            tenSP: sanPham.tenSP, 
            soLuong: 1, 
            donGia: sanPham.giaBan
        }

        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP);

        if(index !== -1) {
            this.state.gioHang[index].soLuong += 1;
        }else{
            this.state.gioHang.push(spGioHang);
        }
        // this.state.gioHang.push(spGioHang);

        this.setState({
            gioHang: this.state.gioHang
        })
    }

    xoaGioHang = (maSP) => {
        
        let index = this.state.gioHang.findIndex(spGioHang => spGioHang.maSP === maSP);
        if(index !== -1){
            this.state.gioHang.splice(index,1);
        }

        this.setState({
            gioHang: this.state.gioHang
        })

    }

    tinhTongSoLuong = () => {
        // Cách 1: Dùng forr  

        // let tongSoLuong = 0;

        // for(let i=0; i<this.state.gioHang.length; i++){
        //     let spGioHang = this.state.gioHang[i];
        //     tongSoLuong += spGioHang.soLuong;
        // }

        // return tongSoLuong;

        // Cách 2: Dùng Reduce
        return this.state.gioHang.reduce( ((tongSoLuong, spGioHang, index) => {
            return tongSoLuong += spGioHang.soLuong;
        }),0 )
    }

    tangGiamSoLuong = (number, maSP) => { // nếu tăng thì number = 1, nếu giảm number = -1

        let index = this.state.gioHang.findIndex(spGioHang => spGioHang.maSP === maSP);
        if(index !== -1){

            if(this.state.gioHang[index].soLuong <= 1 && number === -1){
                alert('Số lượng tối thiểu phải là 1')
                return ;
            }

            this.state.gioHang[index].soLuong += number;
        }

        this.setState({
            gioHang: this.state.gioHang
        })

    }

    render() {
        return (
            <div>
                <h3 className='display-4 text-center'>
                    Bài Tập Giỏ Hàng
                </h3>
                <div className='text-right'>
                    <span style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart-plus mr-5  "> ({this.tinhTongSoLuong()}) Giỏ hàng </i>

                    </span>

                </div>
                <Cart tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <ProductListCart  themGioHang={this.themGioHang} />

            </div>
        )
    }
}
