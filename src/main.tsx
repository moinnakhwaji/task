import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider, useTheme } from './components/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>
);
