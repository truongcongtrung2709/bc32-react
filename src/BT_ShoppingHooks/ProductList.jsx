import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products, onAddToCart}) => {
  return (
    <div className='row'>
        {products.map((product) =>(
            <div key={product.id} className="col-sm-4">
                <ProductItem product={product} onAddToCart={onAddToCart} />
            </div>
        ))}
    </div>
  )
}

export default ProductList