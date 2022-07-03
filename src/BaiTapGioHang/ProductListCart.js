import React, { Component } from 'react'
import dataPhone from '../Data/dataPhone111.json'
import ProductItemCart from './ProductItemCart';

export default class ProductList extends Component {

  mangSanPham = dataPhone;

  state = {
    sanPhamChiTiet: {
      "maSP": 1,
      "tenSP": "VinSmart Live",
      "manHinh": "AMOLED, 6.2, Full HD+",
      "heDieuHanh": "Android 9.0 (Pie)",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 5700000,
      "hinhAnh": "./img/vsphone.jpg"

    },

  }

  renderSanPham = () => {
    return this.mangSanPham.map((sanPham, index) => {
      return <div className='col-4' key={index}>
        <ProductItemCart themGioHang={this.props.themGioHang}  sanPhamProps={sanPham} />
      </div>
    })
  }

  

  render() {
    return (
      <div className='container'>
        

        <div className='row'>
          {this.renderSanPham()}
        </div>


      </div>
    )
  }
}
