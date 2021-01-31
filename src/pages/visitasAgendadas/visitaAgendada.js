import React, { useState } from "react";

import { Container, Content, Row, BtnMenu } from "./style";

function VisitaAgendada() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const handleClick = () => {
      setActive(true)
      setActive2(false);
      setActive3(false);
      
  
  };
  const handleClick2 = () => {
  
      setActive2(true)
      setActive(false);
      setActive3(false)
    
  
  };
  const handleClick3 = () => {

      setActive3(true)
      setActive(false);
      setActive2(false)
    
  };
  return (
    <Container>
      <h1>visitas agendadas</h1>
      <Content>
        <Row>
          <BtnMenu active={active} onClick={handleClick}>
            <p>sss</p>

          </BtnMenu>
          <BtnMenu active={active2} onClick={handleClick2}>
            <p>sss</p>
          </BtnMenu>
          <BtnMenu active={active3} onClick={handleClick3}>
            <p>sss</p>
          </BtnMenu>
        </Row>
      </Content>
    </Container>
  );
}

export default VisitaAgendada;
