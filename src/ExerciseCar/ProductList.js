import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProductItem = () => {
        return this.props.productData.map((item, index) => {
            return <div className='col-3' key={index}>
                <ProductItem xemChiTiet={this.props.xemChiTiet} productItem={item}/>
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderProductItem()}

                </div>
            </div>
        )
    }
}
