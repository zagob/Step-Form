import React from 'react';

import {
    HomeContainer,
    BannerContainer,
    BannerConteudo,
    AnuncioConteudo,
    Container_1,
    TituloPrincipal,
    SubtituloPrincipal,
    Container_2,
    ConteudoEsquerdo,
    TextoEsquerdo,
    ConteudoDireito,
    TextoDireito,
    FormContainer,
    FormConteudo,
    DescricaoForm,
} from './styled';


import pessoa from '../../assets/image/pessoa.png';
import iconeSorriso from '../../assets/icon/sorriso.png';
import iconeSeguranca from '../../assets/icon/seguranca.png';
import casa from '../../assets/icon/casa.png';

function Home() {
    return (
        <HomeContainer>
            <div className="p-grid p-nogutter">
                <BannerContainer className="p-sm-12">
                    <BannerConteudo>
                        <AnuncioConteudo>
                            <p>
                                Anuncie seu imóvel aqui!
                            </p>
                        </AnuncioConteudo>
                    </BannerConteudo>
                </BannerContainer>
            </div>
            <div className="p-grid p-nogutter" >
                <Container_1>
                    <TituloPrincipal>
                        <h4>
                            Anuncie na melhor corretora de imóveis online
                        </h4>
                    </TituloPrincipal>
                    <SubtituloPrincipal>
                        <p>
                            Com a Spotimob, anunciar imóveis ficou ainda mais rápido.
                            Preencha o formulário abaixo e faça parte!
                        </p>
                    </SubtituloPrincipal>
                    <FormContainer>
                        <FormConteudo>
                            <div>
                                <DescricaoForm >
                                    <div>
                                        <img src={casa} width="60" height="60" alt="pessoa" />
                                    </div>
                                    <div>
                                        <p>Alugue seu imóvel</p>
                                        <p>sem burocracia</p>
                                    </div>
                                </DescricaoForm>
                            </div>
                        </FormConteudo>
                        <div style={{ display: 'flex' }}>
                            <img src={pessoa} width="329" height="383" alt="pessoa" />
                        </div>
                    </FormContainer>
                </Container_1>

            </div>
            <Container_2 className="p-grid p-nogutter" >
                <div className="p-sm-6">
                    <ConteudoEsquerdo>
                        <div >
                            <img src={iconeSorriso} width="62" height="62" alt="" />
                        </div>
                        <TextoEsquerdo>
                            <div>
                                <h2 >SEM PREOCUPAÇÃO</h2>
                            </div>
                            <div>
                                <p>
                                    Agora você não tem mais
                                    desculpa para não apostar em uma
                                    corretora de imóveis online. A Spotimob te garante tudo em um clique,
                                    sem precisar sair de casa e enfrentar qualquer burocracia no processo.
                                    Anunciar imóveis grátis, sem se preocupar, é possível. Nossa corretora
                                    de imóveis online te mostra o caminho.
                                </p>
                            </div>
                        </TextoEsquerdo>
                    </ConteudoEsquerdo>
                </div>
                <div className="p-sm-6">
                    <ConteudoDireito>
                        <div>
                            <img src={iconeSeguranca} width="68" height="68" alt="" />
                        </div>
                        <TextoDireito>
                            <div>
                                <h2>SIMPLES E SEGURO</h2>
                            </div>
                            <div>
                                <p>
                                    Anunciar imóveis totalmente online é a sua melhor decisão. Nossa tecnologia de
                                    ponta deixa todos os processos mais rápidos e você mais seguro(a). Administração
                                    e fotos profissionais, garantindo que o seu anúncio sempre seja visto. Tudo isso no
                                    melhor site para anunciar imóveis. Comece agora mesmo!
                                </p>
                            </div>
                        </TextoDireito>
                    </ConteudoDireito>
                </div>
            </Container_2>
        </HomeContainer >
    );
}
export default Home;


// function Home() {
//     return (
//         <div className="home-container">
//             <div className="p-grid p-nogutter">
//                 <div className="p-sm-12 banner-container">
//                     <div className="banner-conteudo">
//                         <div className="anuncio-conteudo">
//                             <p className="texto-anuncio" >
//                                 Anuncie seu imóvel aqui!
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="p-grid p-nogutter" >
//                 <div className="p-sm-12 texto-container">
//                     <div className="titulo-principal">
//                         <h4>
//                             Anuncie na melhor corretora de imóveis online
//                         </h4>
//                     </div>
//                     <div className="subtitulo-principal">
//                         <p>
//                             Com a Spotimob, anunciar imóveis ficou ainda mais rápido.
//                             Preencha o formulário abaixo e faça parte!
//                         </p>
//                     </div>
//                     <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '266px', marginTop: '156px' }}>
//                         <img src={pessoa} alt="pessoa" />
//                     </div>
//                 </div>
//             </div>
//             <div className="p-grid p-nogutter" >
//                 <div className="p-sm-6" style={{ backgroundColor: '#117AA4', height: '367px', }}>
//                     <div style={{ display: 'flex', marginLeft: '156px', marginTop: '68px', }}>
//                         <div style={{ paddingTop: '10px' }}>
//                             <img src={iconeSorriso} width="62" height="62" alt="" />
//                         </div>
//                         <div style={{ fontSize: '19px', color: '#FFF', marginLeft: '25px' }}>
//                             <div>
//                                 <h2>SEM PREOCUPAÇÃO</h2>
//                             </div>
//                             <div style={{ marginTop: '20px', fontSize: '15px', color: '#FFF', width: '401px' }}>
//                                 <p>
//                                     Agora você não tem mais
//                                     desculpa para não apostar em uma
//                                     corretora de imóveis online. A Spotimob te garante tudo em um clique,
//                                     sem precisar sair de casa e enfrentar qualquer burocracia no processo.
//                                     Anunciar imóveis grátis, sem se preocupar, é possível. Nossa corretora
//                                     de imóveis online te mostra o caminho.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-sm-6" style={{ backgroundColor: '#117AA4', height: '367px' }}>
//                     <div style={{ display: 'flex', marginRight: '156px', marginTop: '68px' }}>
//                         <div style={{ paddingTop: '10px' }}>
//                             <img src={iconeSeguranca} width="68" height="68" alt="" />
//                         </div>
//                         <div style={{ fontSize: '19px', color: '#FFF', marginLeft: '25px' }}>
//                             <div>
//                                 <h2>SIMPLES E SEGURO</h2>
//                             </div>
//                             <div style={{ marginTop: '20px', fontSize: '15px', color: '#FFF', width: '401px' }}>
//                                 <p>
//                                     Anunciar imóveis totalmente online é a sua melhor decisão. Nossa tecnologia de
//                                     ponta deixa todos os processos mais rápidos e você mais seguro(a). Administração
//                                     e fotos profissionais, garantindo que o seu anúncio sempre seja visto. Tudo isso no
//                                     melhor site para anunciar imóveis. Comece agora mesmo!
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }
// export default Home;