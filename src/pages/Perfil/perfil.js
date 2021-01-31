import React from 'react';

import {
    MainContainer,
    TituloPrincipal,
    ContainerMenu,
    LabelSection,
    LinhaVermelha,
    Row,
    Label,

} from './styled'

import Opcao from './opcaoComponent'


import user from '../../assets/svg/user.svg'
import msg from '../../assets/svg/msg.svg'
import pendentes from '../../assets/svg/pendentes.svg'
import anunciados from '../../assets/svg/anunciados.svg'
import alugados from '../../assets/svg/alugados.svg'
import agenda from '../../assets/svg/agenda.svg'
import historico from '../../assets/svg/historico.svg'
import fotos from '../../assets/svg/fotos.svg'
import proposta from '../../assets/svg/proposta.svg'

function Perfil() {
    return (
        <MainContainer>
            <TituloPrincipal>
                MEU PERFIL
             </TituloPrincipal>

            <ContainerMenu>
                <LabelSection>
                    meu perfil
                </LabelSection>

                <LinhaVermelha />

                <Opcao img1={user}
                    label1='meus dados'
                    img2={msg}
                    label2='mensagens'>
                </Opcao>

                <LabelSection>
                    meus imóveis
                </LabelSection>
                <LinhaVermelha />

                <Opcao img1={pendentes}
                    label1='pendentes'
                    img2={anunciados}
                    label2='anunciados'
                    img3={alugados}
                    label3='alugados' >

                </Opcao>
                <LabelSection>
                    visitas
                </LabelSection>
                <LinhaVermelha />

                <Opcao img1={agenda}
                    label1='visitas agendadas'
                    img2={historico}
                    label2='histórico de
                    visitas'
                    img3={fotos}
                    label3='sessão de
                    fotos' >
                        
                </Opcao>
                <LabelSection>
                propostas
                </LabelSection>
                <LinhaVermelha />

                <Opcao img1={proposta}
                    label1='Ver propostas'
                   >
                        
                </Opcao>


            </ContainerMenu>
        </MainContainer>);;
}

export default Perfil;