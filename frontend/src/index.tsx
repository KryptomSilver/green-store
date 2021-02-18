import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import { ProductsList } from './components/Products/ProductsList';
import ProductForm from './components/Products/ProductForm';


//CSS
import 'bootswatch/dist/slate/bootstrap.min.css';
import './index.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path="/products" component={ProductsList} />
      <Route path="/product-add" component={ProductForm} />
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
