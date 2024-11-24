import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const name = 'my name';
const reactElement = React.createElement(
      'a',
      {
        href : 'https://google.com',
        target : '_blank'
      },
      'google',
      name
    );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   reactElement
// )