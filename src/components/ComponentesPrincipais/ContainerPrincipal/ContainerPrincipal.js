import React from 'react';
import Container from './styled.js';

function ContainerPrincipal(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}
export default ContainerPrincipal;