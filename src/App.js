import Header from "./components/Header";
import './style/app.scss'
import Home from "./pages/Home";
import {useEffect} from "react";
import {getPizzas} from "./store/reducers/pizzaReducer";
import {useDispatch} from "react-redux";
import { Route, Switch }  from 'react-router-dom'
import Cart from "./pages/Cart";

function App() {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPizzas())
    },[])



    return <div className={'wrapper'}>
        <Header/>
        <div className="content">

            <Switch>
            <Route path={'/cart'} component={Cart}/>
            <Route path={'/'} component={Home}/>

            </Switch>
        </div>
    </div>

}


export default App;