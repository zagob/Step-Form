import styled from 'styled-components';

import banner from '../../assets/image/banner2.png';
import predios from '../../assets/image/predios.png';

const HomeContainer = styled.div`
    background-color: #F9F9FA !important;
`;

const BannerContainer = styled.div`
    background: url(${banner});
    background-size:cover;
    background-repeat: no-repeat;
    height: 475px;
`;

const BannerConteudo = styled.div`
    padding-left: 216px;
    padding-top: 167px;
`;

const AnuncioConteudo = styled.div`
    width: 293px;
    p {
        color: #182849;
        font-size: 45px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    };
`;

const Container_1 = styled.div`
    /* display: flex; */
    /* background-color: antiquewhite; */
    /* flex-direction: column; */
    text-align: center;
    padding-top: 74px !important;
    /* padding-bottom: 94px !important; */
    height: 710px;
    background: url(${predios}); 
    background-size:contain;
    background-repeat: no-repeat;
    background-position: bottom;
    position:relative;
`;

const TituloPrincipal = styled.div`
    color: #182849;
    font-size: 34px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`;

const SubtituloPrincipal = styled.div`
    color: #182849;
    font-size: 23px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-right: 319px;
    margin-left: 319px;
`;

const ContainerPessoa = styled.div`
    /* display: flex; */
    /* justify-content: flex-end; */
    /* margin-right: 266px; */
    margin-top: 156px;
`;

const Container_2 = styled.div`
    background-color: #117AA4;
    height: 367px;
`;

const ConteudoEsquerdo = styled.div`
    display: flex;
    margin-left: 156px;
    margin-top: 68px;

    img {
        margin-top:10px;
    }
`;

const TextoEsquerdo = styled.div`
    color: #FFF;
    width: 401px;
    margin-left: 25px;
    h2 {
        font-size: 19px;
    };
    p {
        margin-top: 20px;
        font-size: 15px;
        color: #FFF;
    }
`;

const ConteudoDireito = styled.div`
    display: flex;
    margin-right: 156px;
    margin-top: 68px;
    
    img {
        margin-top:10px;
    }
`;

const TextoDireito = styled.div`
    width: 401px;
    color: #FFF;
    margin-left: 25px;
    h2 {
        font-size: 19px;
    };
    p {
        margin-top: 20px;
        font-size: 15px;
        color: #FFF;
    }
`;

const FormContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0; right: 0; 
    width: 100%;
    align-items: flex-end;
`;

const FormConteudo = styled.div`
     width: 550px;
     height: 370px;
     background-color: #F0F1F1;
     margin-left: 180px;
     margin-right: 62px;
     border-top-left-radius: 36px;
     border-top-right-radius: 36px;
     padding-top: 42px;
     padding-left: 68px;
     padding-right: 68px;
`;

const DescricaoForm = styled.div`
    /* background-color: blue; */
    display: flex; 
    text-align: initial;
    align-items:center;
    img {
        margin-right: 36px;
    };

    p {
        font-size:26px;
        color:#D02D30;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    };
`;

export {
    HomeContainer,
    BannerContainer,
    BannerConteudo,
    AnuncioConteudo,
    Container_1,
    TituloPrincipal,
    SubtituloPrincipal,
    ContainerPessoa,
    Container_2,
    ConteudoEsquerdo,
    TextoEsquerdo,
    ConteudoDireito,
    TextoDireito,
    FormContainer,
    FormConteudo,
    DescricaoForm
};