import '../style/component/header.scss'
import logo from '../pictures/logo.png'
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

 const {totalPrice, totalCount} = useSelector(({cartReducer})=>cartReducer)

    return <div className={'header'}>
        <div className={'container'}>

                <div className={'logo'}>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                        <img src={logo} className={'logo_img'} alt={'Photo not found!'}/>
                        <h2 className={'logo_title'}>React pizza </h2>
                        <p className={'logo_text'}>самая вкусная пицца во вселенной</p>
                    </Link>
                </div>

            <Link to={'/cart'} style={{textDecoration: 'none'}}>
                <div className={'cart'}>
                    <p className={'cart_sum'}> {totalPrice} ₽</p>
                    <span className={'cart_line'}>

                </span>
                    <div>
            <span className={'cart_icon'}>
<i className="fas fa-shopping-cart">

</i>
            </span>
                        <p className={'cart_count'}> {totalCount} </p>
                    </div>
                </div>
            </Link>
        </div>
    </div>


}

export default Header;