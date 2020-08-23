import React from 'react';
import Home from './pages/Home'
import EspecialidadPage from './pages/EspecialidadPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  // const hombrePerfil = prompt("¿Cuál es tu nombre?", "Usuario");
  // props.cambiarNombre(hombrePerfil)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:esp" component={EspecialidadPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
