import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store/Store';

import { AuthContextProvider } from './page/auth/form/formcontext/AuthContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <Provider store={store}>
  <App />
  </Provider>
  </AuthContextProvider>
  );