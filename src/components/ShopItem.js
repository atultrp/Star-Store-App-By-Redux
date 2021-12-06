import React from 'react'

const ShopItem = (props) => {
    const { ItemData } = props;
    return (
        <div className="card">
            <img src={ItemData.productImage} className="card-img-top" alt="Product" />
            <div className="card-body">
                <h5 className="card-title">{ItemData.productName}</h5>
                <p className="card-text">{ItemData.productDetail}</p>
                <div>
                    <button className="btn btn-info me-4 pe-none">{ItemData.productPrice}</button>
                    <button className="btn btn-success mx-2">-</button>
                    Add to cart
                    <button className="btn btn-success mx-2">+</button>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
