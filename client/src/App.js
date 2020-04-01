import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Appbar from './component/AppNavbar';
import ShoppingList from './component/shoppingList';

import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Appbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}


export default App;
