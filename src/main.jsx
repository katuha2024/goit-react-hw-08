import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { store } from './redux/store'; 
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);