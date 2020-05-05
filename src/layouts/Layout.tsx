import React from 'react';
import Container from 'react-bootstrap/Container';

export const Layout = (props: any) => (
    <Container className="fullPage">
        {props.children}
    </Container>
)

      