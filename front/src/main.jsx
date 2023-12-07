import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router.jsx'
import './index.scss'

import TierList from './TierList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TierList />
  </React.StrictMode>,
)
