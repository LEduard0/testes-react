import React from 'react';
//import para as propriedades do react-route
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import da main para ser utilizado
import Main from './pages/main';
//import da pagina de produtos para ser utilizado
import Product from './pages/products'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;