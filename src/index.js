import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css'; 
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const PaginaErro = () => (<div>Pagina 404</div>) ;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cadastro/video"  component={CadastroVideo}/>
        <Route path="/cadastro/categoria"  component={CadastroCategoria}/>
        <Route  component={PaginaErro}/>
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


