import React from 'react';
import '../style/pages/cart.scss'
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import CartEmpty from "./CartEmpty";
import {addPizza, deleteAllPizza, deleteItemPizza, deletePizza} from "../store/reducers/cartReducer";

function Cart() {

    const {items, totalPrice, totalCount} = useSelector((({cartReducer}) => cartReducer))

    const dispatch = useDispatch();

    function clearClicked() {
        if(window.confirm('Вы действительно хотите очистить корзину?'))
        dispatch(deleteAllPizza())
    }

    function minusClicked(item) {
        dispatch(deletePizza(item))
    }

    function plusClicked(item) {
        dispatch(addPizza(item))
    }

    function itemClearClicked(item) {
        if(window.confirm('Вы действительно хотите очистить корзину?'))
        dispatch(deleteItemPizza(item))
    }

    function orderClicked(){
        console.log('Ваш заказ : ',items)
    }

    return (
        totalCount === 0 ? <CartEmpty/> :
            <div className={'cart_page'}>
                <div className="container">
                    <div className="cart_header">
                        <div className="cart_title">
                            <i className="fas fa-shopping-cart"> </i>
                            <p> Корзина</p>
                        </div>
                        <div className="cart_clear" onClick={clearClicked}>
                            <i className="far fa-trash-alt"> </i>
                            <p>Очистить корзину</p>
                        </div>
                    </div>

                    <div className="cart_content">
                        {items.map(item =>
                            <div className="cart_item">
                                <div className="cart_item_about">
                                    <img
                                        src={item.imageUrl}
                                        className={'pizza_img'}/>
                                    <div className="pizza_about">
                                        <p> {item.name}</p>
                                        <p>{item.type} тесто, {item.size} см.</p>
                                    </div>
                                </div>

                                <div className="cart_item_calculate">
                                    <button type={'button'} onClick={() => minusClicked(item)}><i
                                        className="fas fa-minus"> </i></button>
                                    <p>{item.count}</p>
                                    <button type={'button'} onClick={() => plusClicked(item)}><i
                                        className="fas fa-plus"> </i></button>
                                </div>

                                <div className="cart_item_amount">
                                    {item.count * item.price} ₽
                                </div>

                                <button type={'button'} className={'cart_item_clear'}
                                        onClick={() => itemClearClicked(item)}><i className="fas fa-plus"> </i>
                                </button>

                            </div>
                        )}

                        <div className="cart_footer">
                            <div className="footer_header">
                                <div className="footer_header_item">
                                    <p>Всего пицц: </p>
                                    <p> {totalCount} шт.</p>
                                </div>
                                <div className="footer_header_item">
                                    <p>Сумма заказа:</p>
                                    <p> {totalPrice} ₽.</p>
                                </div>
                            </div>
                            <div className="footer_content">
                                <Link to={'/'}>
                                    <button type={'button'}>
                                        <i className="fas fa-angle-left"> </i>
                                        Вернуться назад
                                    </button>
                                </Link>

                                <Link >
                                    <button type={'button'} onClick={orderClicked}>Оплатить сейчас</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    );
}

export default Cart;
