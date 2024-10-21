import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortfolioApp } from './PortfolioApp';
import { BrowserRouter } from 'react-router-dom';
import './styles.module.css';
import './assets/font-awesome-4.7.0/css/font-awesome.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </StrictMode>,
)
