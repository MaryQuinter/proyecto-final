import React from "react";
import Nav from "../components/Nav"
import Banner from '../components/Banner'
import MisGrupos from '../components/MisGrupos'
import ExplorarArtistas from '../components/ExplorarArtistas'
import GenerosSection from '../components/GenerosSection'
import AnuncioFans from '../components/AnuncioFans'
import Footer from '../components/Footer'

function Home() {
  return(
    <>
        <Nav/>
        <Banner/>
        <MisGrupos/>
        <ExplorarArtistas/>
        <GenerosSection/>
        <AnuncioFans/>
        <Footer/>
    </>
  )
}

export default Home;