import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 30px;
  h1 {
    color: #182849;
    font-size: 34px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    margin-bottom: 5%;
  }
`;
export const Content = styled.div`
  height: 50vh;
  width: 50vw;
  background-color: #ffffff;
  border-radius: 15px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-around;

`;
export const BtnMenu = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:${(props)=>props.active?'#FFFFFF':'#EBEBEB'};
  width:calc(100% / 3);
  height:40px;
  cursor: pointer;
`;

