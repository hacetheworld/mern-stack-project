import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Appbar from './component/AppNavbar';
import ShoppingList from './component/shoppingList';
import ItemModel from './component/itemModel';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Appbar />
        <Container>
          <ItemModel
            color='dark'
            style={{
              marginTop: '2rem',
              marginBottom: '2rem'
            }}
            buttonLabel="Add item"
            className='some' />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}


export default App;
