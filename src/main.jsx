import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';

const elementoRaiz = document.getElementById('root');
if (!elementoRaiz) {
  throw new Error('O elemento principal da aplicação não foi encontrado.');
}
createRoot(elementoRaiz).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
