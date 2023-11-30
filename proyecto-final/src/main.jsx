import React from 'react'
import ReactDOM from 'react-dom/client'
import Artista from './components/App'
import Nav from './components/Nav'
import Banner from './components/Banner'
import MisGrupos from './components/MisGrupos'
import GenerosSection from './components/GenerosSection'
import AnuncioFans from './components/AnuncioFans'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Banner/>
    <MisGrupos/>
    <Artista/>
    <GenerosSection/>
    <AnuncioFans/>
    <Footer/>
  </React.StrictMode>,
)
