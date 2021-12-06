import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../states/index';


const ShopItem = (props) => {
    const { ItemData } = props;
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    const { addItem, removeItem } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="card">
            <img src={ItemData.productImage} className="card-img-top" alt="Product" />
            <div className="card-body">
                <h5 className="card-title">{ItemData.productName}</h5>
                <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                    {ItemData.offer}
                </span>
                <p className="card-text">{ItemData.productDetail}</p>
                <div>
                    <button className="btn btn-info me-4 pe-none">{ItemData.productPrice}</button>
                    <button className="btn btn-success mx-2" onClick={() => { removeItem(200) }} disabled={balance >= 10000 ? true : false}>-</button>
                    Add to cart
                    <button className="btn btn-success mx-2" onClick={() => { addItem(200) }} disabled={balance <= 0 ? true : false}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
