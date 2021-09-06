import React from 'react'
import BtnRender from './BtnRender'
import { Link } from 'react-router-dom'

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                    onChange={() => handleCheck(product._id)} />
            }
            <Link to={`/detail/${product._id}`}><img src={product.images.url} alt="" /></Link>
            <br />
            <div className="product_box">
                <Link to={`/detail/${product._id}`}>
                    <h2 title={product.title}>{product.title}</h2>
                </Link>
                <br />
                <b>${product.price}</b>
                <br />
                <br />
                <p>{product.description}</p>
            </div>


            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem