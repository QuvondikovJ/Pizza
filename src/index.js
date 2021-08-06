import ReactDom from 'react-dom'
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

function Index(){

    return <div>
<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>
    </div>

}

ReactDom.render(
    <Index/>,
    document.getElementById('root')
)