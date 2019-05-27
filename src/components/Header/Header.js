import React, { Component } from 'react'

import { Navbar, Nav} from 'react-bootstrap'


export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            src={require("../../images/pokelogo.png")}
                            width="80"
                            className="d-inline-block align-top"
                            alt="pokemon logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link>Histórico</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default Header
