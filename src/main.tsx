import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// 🧩 Import global styles in the right order
import './index.css';  // Tailwind layers + design system
import './App.css';    // Custom layout and section styles

// 🩺 Create React root and render app
createRoot(document.getElementById('root')!).render(
  <App />
);
