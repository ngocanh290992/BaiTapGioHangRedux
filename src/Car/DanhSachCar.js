import React, { Component } from 'react'

export default class DanhSachCar extends Component {

    dataCar = [
        { 
            id: 1,
            name: 'black car',
            img: './img/products/black-car.jpg',
            price: 1000
        },
        { 
            id: 2,
            name: 'red car',
            img: './img/products/red-car.jpg',
            price: 2000
        },
        { 
            id: 3,
            name: 'silver car',
            img: './img/products/silver-car.jpg',
            price: 3000
        },
        { 
            id: 4,
            name: 'steel car',
            img: './img/products/steel-car.jpg',
            price: 4000
        }

    ]


    renderCar = () => {
        return this.dataCar.map( (car, index) => {
            return <div className='col-3' key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={car.img} alt={car.id} />
                    <div className="card-body">
                        <h4 className="card-title">{car.name}</h4>
                        <p className="card-text">{car.price}</p>
                        <button onClick={() => {this.xemChiTiet()}} className='btn btn-success'>Xem chi tiết</button>
                    </div>
                    
                </div>

            </div>
        })
    }

    xemChiTiet = () => {
        
    }

  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Danh Sách Xe</h3>
        <div className='row'>
            {this.renderCar()}
        </div>

      </div>
    )
  }
}
