import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   

    background-color:#F9F9FA;

    .title {
      margin-left: 12em;
      margin-bottom: 10px;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    h1{
        color:#182849;
        text-align: center;
    }

    h3{
        color: #182849;
    }
    h4{
        color:#182849;
        margin-top:10px;
    }

    p{
        color:#182849;
    }

`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const OneSection = styled.div`
  width: 10vw;
  margin-right: 15px;
  max-width: 200px;
  img {
    margin-top: 40px;
  }
`;
export const TwoSection = styled.div`
  width: 70vw input {
    margin-bottom: 50px;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 12em;
  width: 100%;

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 40px;
  

  > div {
    display: flex;
    flex-direction: column;
    ${Row} {
    

      input {
        margin-right: 10px;
      }
    }
  }
  img {
    margin-top: 3em;
    margin-bottom: 1em;
  }
`;
