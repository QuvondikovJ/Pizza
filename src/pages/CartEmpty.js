import React from 'react';
import emptyCartImg from '../pictures/empty-cart.png'
import '../style/pages/cartEmpty.scss'
import {Link} from "react-router-dom";

function CartEmpty() {
    return (
        <div className={'cart_empty'}>
            <div className="container">
                <h2 className={'cart_empty_title'}>Корзина пустая 😕</h2>
                <div className={'cart_empty_text'}>
                    <p> Вероятней всего, вы не заказывали ещё пиццу.</p>
                    <p> Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                </div>
                <img src={emptyCartImg} className={'cart_empty_img'}/>
                <Link to={'/'}>
                    <button type={'button'}> Вернуться назад</button>
                </Link>
            </div>
        </div>
    );
}

export default CartEmpty;
