import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './components/sections/principal/Principal'
import SobreNos from './components/sections/sobre-nos/SobreNos'
import MenuTop from './components/menu-top/MenuTop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuTop />
    <Principal />
    <SobreNos />
  </React.StrictMode>,
)
