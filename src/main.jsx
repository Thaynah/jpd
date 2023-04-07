import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './components/sections/principal/Principal'
import SobreNos from './components/sections/sobre-nos/SobreNos'
import MenuTop from './components/menu-top/MenuTop'
import AjudeNos from './components/sections/ajude-nos/AjudeNos'
import ContagemNumeros from './components/contagem-numeros/ContagemNumeros';

import './index.css'
import Equipes from './components/sections/equipes/Equipes';
import Parceiros from './components/sections/parceiros/Parceiros';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuTop />
    <Principal />
    <SobreNos />
    <Equipes />
    <ContagemNumeros />
    <Parceiros />
    <AjudeNos />
  </React.StrictMode>,
)
