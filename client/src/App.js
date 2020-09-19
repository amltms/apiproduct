import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import {Nav} from './components/Nav';
import {Home} from './components/Home';
import {Products} from './components/products/Products';
import {CreateProduct} from './components/products/CreateProduct';
import {ViewProduct} from './components/products/ViewProduct';
import {EditProduct} from './components/products/EditProduct';

function App() {
  return (
    <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products} />
          <Route path="/create" component={CreateProduct} />
          <Route exact path="/products/:id" component={ViewProduct} />
          <Route path="/products/edit/:id" component={EditProduct} />
        </Switch>
   
      </BrowserRouter>
  );
}
export default App;
