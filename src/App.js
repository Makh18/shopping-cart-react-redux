import React from 'react';
import './App.css';
import Header from './components/Header'
import Products from './components/Products'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './components/Cart'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path="/" component={Products}></Route>
      <Route path="/cart" component={Cart}></Route>
      </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
