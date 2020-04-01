import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Appbar from './component/AppNavbar';
import ShoppingList from './component/shoppingList';
function App() {
  return (
    <div className="App">
      <Appbar />
      <ShoppingList />
    </div>
  );
}

export default App;
