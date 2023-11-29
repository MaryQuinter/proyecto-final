import React from 'react'
import ReactDOM from 'react-dom/client'
import Artista from './components/App'
import Nav from './components/Nav'
import Banner from './components/Banner'
import MisGrupos from './components/MisGrupos'
import GenerosSection from './components/GenerosSection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Banner/>
    <MisGrupos/>
    <Artista/>
    <GenerosSection/>
  </React.StrictMode>,
)
