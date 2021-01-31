/* eslint-disable no-unused-vars */
import styled from 'styled-components'

const Container = styled.div`
    padding-top:30px;
    height:100vh;
    display:flex;
    flex-direction:column;
    img:{
        height:30px;
        width:30px;
    }
`;
const Titulo = styled.h1`
    display:flex;
    align-self: center;
    color: #182849;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    
`
const Quadrado = styled.div`
height:50px;
width:50px;
background-color:red;
`


const ButtonSelector = styled.button`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:30px;
    height:30px;
    background-color:${(props)=>props.active?'#CF3033' :'#fff'};
    border:${(props)=>props.active?'none' :'1px solid #CFCECD'};
    border-radius:50%;
    color:${(props)=>props.active?'#fff' :'#182849'};
    outline:none;


`

export {
    Container,
    Titulo,
    Quadrado,
    ButtonSelector,
}