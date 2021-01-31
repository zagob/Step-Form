import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

import perfil from '../../../assets/icon/PERFIL.png';
import ape from '../../../assets/icon/ape.png';
import proposta from '../../../assets/icon/PROPOSTA.png';
import visitas from '../../../assets/icon/VISITAS.png';
import sair from '../../../assets/icon/SAIR.png';

function Dropdown() {
    return (
        <div className="dropdown-conteudo">
            <div className="dropdown-container-1">
                <div className="dropdown-container-2">
                    <div className="drop-selecionar-itens">
                        <Link className="link-dropdown" to="/Perfil">
                            <div>
                                <img src={perfil} width="40" height="32" className="App-logo" alt="logo" />
                            </div>
                            <span>Meu perfil</span>
                        </Link>
                    </div>
                    <div className="drop-selecionar-itens">
                        <Link className="link-dropdown" to="/">
                            <div>
                                <img src={ape} width="23" height="36" className="App-logo" alt="logo" />
                            </div>
                            <span>Meus imóveis</span>
                        </Link>
                    </div>
                    <div className="drop-selecionar-itens">
                        <Link className="link-dropdown" to="/">
                            <div>
                                <img src={proposta} width="35" height="33" className="App-logo" alt="logo" />
                            </div>
                            <span>Ver propostas</span>
                        </Link>
                    </div>
                    <div className="drop-selecionar-itens">
                        <Link className="link-dropdown" to="/">
                            <div>
                                <img src={visitas} width="35" height="37" className="App-logo" alt="logo" />
                            </div>
                            <span>visitas</span>
                        </Link>
                    </div>
                    <div className="drop-selecionar-itens">
                        <Link className="link-dropdown" to="/">
                            <div>
                                <img src={sair} width="40" height="40" className="App-logo" alt="logo" />
                            </div>
                            <span>Sair</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;