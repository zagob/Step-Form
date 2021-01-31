import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
// import Anunciar from "./pages/DadosImovel/DadosImoveis";
import Anunciar from "./pages/FormDadosImovel";
import Custos from "./pages/Custos/Custos";
import Fotos from "./pages/Fotos/fotos";
import Visita from "./pages/Visita/Visita";
import Login from "./pages/Login/login";
import Perfil from "./pages/Perfil/perfil";
import Alugar from "./pages/inquilino/Alugar/alugar";
import ListaImoveis from "./pages/inquilino/ListaImoveis/listaImoveis";
import ImoveisDetails from "./pages/inquilino/ImoveisDetails/imoveisDetails";
import Agendamento from "./pages/inquilino/AgendarVisita/agendamento";
import MeuDados from "./pages/MeusDados/meusDados"
import Cadastro from "./pages/CadastroUser/cadastro"
import VisitaAgendada from "./pages/visitasAgendadas/visitaAgendada";

function Routers() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/EncontrarImoveis">
        <ListaImoveis />
      </Route>

      <Route path="/Alugar">
        <Alugar />
      </Route>
      <Route path="/Anunciar">
        <Anunciar />
      </Route>
      <Route path="/Perfil">
        <Perfil />
      </Route>
      <Route path="/Custos">
        <Custos />
      </Route>
      <Route path="/Fotos">
        <Fotos />
      </Route>
      <Route path="/Visita">
        <Visita />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/ImoveisDetails">
        <ImoveisDetails />
      </Route>

      <Route path="/Agendar">
        <Agendamento />
      </Route>
      <Route path="/MeusDados">
        <MeuDados />
      </Route>

      <Route path="/Cadastro">
        <Cadastro/>
      </Route>
      <Route path="/visitaAgendada">
        <VisitaAgendada/>
      </Route>
      {/* <Route exact path="/about">
                <About />
            </Route>
            <Route path="/users">
                <SignIn />
            </Route> */}

      {/* <Route>
                <NotFound />
            </Route> */}
    </Switch>
  );
}

export default Routers;
