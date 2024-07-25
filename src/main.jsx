import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { inject } from '@vercel/analytics';
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
  {inject()}
  <SpeedInsights/>
    <App />
    
    </>
)
