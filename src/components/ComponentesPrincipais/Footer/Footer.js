import React from 'react';
import { Link } from 'react-router-dom';
import {
    ContainerFooter,
    ConteudoEsquerdo,
    ConteudoDireito,
    ContainerEsquerdo,
    Lista,
    LogoMarca,
    Contatos,
    Telefone,
    Endereco,
    Localizacao,
} from './styled';

import logomarca from '../../../assets/image/logo-marca.png';
import telefone from '../../../assets/icon/telefone.png';
import iconeLocalizacao from '../../../assets/icon/localizacao.png';

function Footer() {
    return (
        <ContainerFooter>
            <div className="p-grid p-nogutter">
                <ConteudoEsquerdo className="p-sm-5">
                    <ContainerEsquerdo>
                        <LogoMarca>
                            <div>
                                <img src={logomarca} width="199" height="47" alt="logo" />
                            </div>
                            <span>CRECI - 21626-J</span>
                        </LogoMarca>

                        <Contatos>
                            <Telefone>
                                <img src={telefone} width="" height="" alt="" />
                                <span>27 2104-6444</span>
                            </Telefone>
                            <Localizacao>
                                <div>
                                    <img src={iconeLocalizacao} width="" height="" alt="" />
                                </div>
                                <Endereco>
                                    <span>Av. Luiz Manoel Vellozo</span>
                                    <span>Coqueiral de Itaparica, Vila Velha-ES</span>
                                    <span>CEP: 29060-040</span>
                                </Endereco>
                            </Localizacao>
                        </Contatos>
                    </ContainerEsquerdo>

                </ConteudoEsquerdo>

                <ConteudoDireito className="p-sm-7">
                    <Lista>
                        <h6>
                            IMÓVEIS
                        </h6>
                        <ul>
                            <li>
                                <Link to="/">Alugue um imóvel</Link>
                            </li>
                            <li>
                                <Link to="/about">Anuncie um imóvel</Link>
                            </li>
                        </ul>
                    </Lista>
                    <Lista>
                        <h6>
                            COMO FUNCIONA?
                        </h6>
                        <ul>
                            <li>
                                <Link to="/">Para o proprietário</Link>
                            </li>
                            <li>
                                <Link to="/about">Para o inquilino</Link>
                            </li>
                            <li>
                                <Link to="/about">Para o corretor</Link>
                            </li>
                        </ul>
                    </Lista>
                    <Lista>
                        <h6>
                            A SPOTIMOB
                        </h6>
                        <ul>
                            <li>
                                <Link to="/">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/about">Ajuda</Link>
                            </li>
                            <li>
                                <Link to="/about">Trabalhe Conosco</Link>
                            </li>
                            <li>
                                <Link to="/about">Política de privacidade</Link>
                            </li>
                        </ul>
                    </Lista>
                    <div style={{
                        backgroundColor: 'pink', width: '100px', position: 'absolute', display: 'flex',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        left: '0',
                        right: '0',
                        bottom: '0',
                    }}>
                    </div>
                </ConteudoDireito>

            </div>
        </ContainerFooter >
    );
}


export default Footer;