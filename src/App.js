import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import ContainerPrincipal from './components/ComponentesPrincipais/ContainerPrincipal/ContainerPrincipal';
import Header from './components/ComponentesPrincipais/Header/Header';
import Footer from './components/ComponentesPrincipais/Footer/Footer';

import Routes from './Routes';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router >
      <ContainerPrincipal >
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </ContainerPrincipal>
    </Router>
  );
}

export default App;