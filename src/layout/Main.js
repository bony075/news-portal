import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from "react-router-dom"
const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2">
                        <h1>left</h1>
                    </Col>
                    <Col lg="7">
                        <Outlet>
                            
                        </Outlet>
                        <h1>middel</h1>

                    </Col>
                    <Col lg="3">
                        <h1>
                            right
                        </h1>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;