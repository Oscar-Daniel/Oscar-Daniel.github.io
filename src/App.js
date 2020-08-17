import React from 'react';
import './App.css';
import Sumillas from './components/containers/Sumillas'
import Perfil from './components/containers/Perfil'
import ModalElectivos from './components/containers/ModalElectivos'
import { cambiarNombre } from './actions'

import { connect } from 'react-redux'

function App(props) {
  const hombrePerfil = prompt("¿Cuál es tu nombre?", "Usuario");
  props.cambiarNombre(hombrePerfil)
  return (
    <div className="App">
      <Perfil />
      <Sumillas />
      <ModalElectivos />
    </div>
  );
}

const mapDispatchToProps = {
  cambiarNombre
}

export default connect(null, mapDispatchToProps)(App);
