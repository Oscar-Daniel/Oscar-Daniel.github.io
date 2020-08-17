import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ModalElectivos from './components/containers/ModalElectivos';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore( reducer,
   Map(), 
   composeWithDevTools(applyMiddleware(thunk)) )

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

ReactDOM.createPortal(
    <ModalElectivos />,
  document.getElementById('modal'))
