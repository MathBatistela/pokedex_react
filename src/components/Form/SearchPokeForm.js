import React, { Component } from 'react'
import Input from "./Input"
import {Row, Col} from "react-bootstrap"
import Button from "../Button"

export class SearchPokeForm extends Component {
    render() {
        return (
            <Row>
                <Col xs="10">
                    <Input placeholder="Digite o nome do pokémon"/>
                </Col>
                <Col xs="2">
                    <Button children="Buscar"/>
                </Col>  
            </Row>
        )
    }
}

export default SearchPokeForm
