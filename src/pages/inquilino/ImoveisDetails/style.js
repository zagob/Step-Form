import styled from 'styled-components'


const Container = styled.div`
display:flex;
flex-direction:column;
background: rgb(249,249,250);
background: linear-gradient(0deg, rgba(249,249,250,1) 0%, rgba(255,255,255,1) 100%);
padding-top:4em;

`;

const ImageView = styled.div`
display:flex;
justify-content: center;
width:100vw;
margin-right:4em;
margin-left:6em;
// margin-top:4em;
margin-bottom:4em;

`;

const Row = styled.div`
    display:flex;
    
`;

const CardValues = styled.div`
    display:flex;
    flex-direction: column;
    width:20vw;
    min-width:250px;
    background-color:#fff;
    margin-bottom:1em;
    border-radius:10px;
    padding: 5px 0px;
    border: 2px solid #BCBCBC;
    margin-right:3em;
    div{
        display:flex;
        justify-content: space-between;
        width:100%;
        padding:0 10px;
    }
    p{
        color: #B4B3B3;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        margin-bottom:5%;

    }
    button{
        display:flex;
        align-self:center;
        max-width:70%;
    }
   
`
const LinhaCinza = styled.div`
    margin-top:0.5em;
    margin-bottom:0.5em;
    border: 1px solid #BCBCBC;

`;
const LinhaTracejada = styled(LinhaCinza)`
    border-style: dashed;

`;

const Titulo = styled.h2`
text-align: justify;
    color: #182849;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom:5%;
`;

const RowIcon = styled.div`
    display:flex;
    padding:1em;

`
const Label = styled.p`
color: #182849;
font-size: 16px;
font-family: 'Montserrat', sans-serif;
font-weight: 500;
margin-bottom:5%;
`;

const SubTitulo = styled.h3`
color: #182849;
font-size: 20px;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
margin-bottom:1em;
margin-top:2em;
`;


const IconDetails = styled.div`
display:flex;
justify-content:center;
margin-right:4em;
img{
    height: 20px;
    widht:16px
   
}`;

const EndereçoContainer = styled.div`
display:flex;
flex-direction:column;
img{
    width:30px;
    height:30px;
}
p{
    color: #B4B3B3;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}
button{
    margin-left:25px;
    margin-top:10px;
    display:flex;
    max-width:50%;
    align-self: start;
}
`;

const Section = styled.div`
padding:0 40px;

p{
    color: #B4B3B3;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-bottom: 0;
}
h3{
    margin-bottom:0.2em;
}
button{
    color:#3370FF;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color:transparent;
    cursor: pointer;
   
}
`;
const SectionCard = styled.div`
    background-color:#F0F1F1;
    margin-top:40px;
    padding:40px 40px;
   >p{
        color: #B4B3B3;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        margin-bottom: 0;
    }
`;
const Calendar = styled.div`
    height:20vh;
    width:20vw;
   
    background-color:#fff;
    border-radius:20px;
    div{
        border-radius:10px  10px 0  0 ;
        background-color:#E62C33;
        padding:0 10px 10px 10px;
    }

`
export {
    Container,
    ImageView,
    Row,
    Titulo,
    RowIcon,
    Label,
    IconDetails,
    SubTitulo,
    CardValues,
    LinhaCinza,
    LinhaTracejada,
    EndereçoContainer,
    Section,
    SectionCard,
    Calendar
}