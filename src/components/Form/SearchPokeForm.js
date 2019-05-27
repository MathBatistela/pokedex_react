import React, { Component } from 'react'
import Input from "./Input"
import {Row, Col} from "react-bootstrap"
import Button from "../Button"

export class SearchPokeForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}> 
            <Row>

                <Col xs="10">
                    <Input placeholder="Digite o nome do pokémon" value={this.props.nome} onChange={this.props.onChange}/>
                </Col>
                <Col xs="2">
                    <Button type="submit" children="Buscar"/>
                </Col>  
            </Row>
            </form>
        )
    }
}

export default SearchPokeForm
