import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    return (
        <div className="card text-left">
        <img className="card-img-top" src={this.props.productItem.img} alt={this.props.productItem.id} />
        <div className="card-body">
            <h4 className="card-title">{this.props.productItem.name}</h4>
            <p className="card-text">{this.props.productItem.price}</p>
            <button onClick={()=>{this.props.xemChiTiet(this.props.productItem)}} data-toggle="modal" data-target="#modelId" className='btn btn-success'>Xem chi tiết</button>
        </div>
        
    </div>
    )
  }
}
