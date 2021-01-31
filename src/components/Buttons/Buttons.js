import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const BtnVermelho= styled(Button)`
    && {
        margin-bottom:1rem;
        background-color: #CF3033;
        color: #fff;
        border-radius:20px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        padding: 7px 14px;
        &:hover {
            background-color: #D84547;
          }
    }
  
`;

const BtnCinza= styled(Button)`
    && {
        margin-bottom:1rem;
        background-color: #B4B3B3;
        color: #fff;
        margin-right: 10px;
        border-radius:20px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        padding: 7px 14px;
        &:hover {
            background-color: ##BFBDBD;
          }
    }
  
`;
const BtnAzulEscuro= styled(Button)`
    && {
        margin-bottom:1rem;
        background-color: #182849;
        color: #fff;
        border-radius:20px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        padding: 7px 14px;
        &:hover {
            background-color: #233864;
          }
    }
  
`;
const BtnAzulClaro= styled(Button)`
    && {
        margin-bottom:1rem;
        background-color: #3382A6;
        color: #fff;
        border-radius:20px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        padding: 7px 14px;
        &:hover {
            background-color: #4B91B1;
          }
    }
  
`;
 
export{
    BtnVermelho,
    BtnCinza,
    BtnAzulEscuro,
    BtnAzulClaro,
}