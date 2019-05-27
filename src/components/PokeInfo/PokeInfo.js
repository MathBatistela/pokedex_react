import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import StatsRadar from '../StatsRadar'

export class PokeInfo extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Image height="100%" src={this.props.infoPoke.img}/>
                    </Col>
                    <Col style={{
                        textAlign: "left"
                    }}>
                        <h3>{this.props.infoPoke.nome} - {this.props.infoPoke.id}</h3>
                        <p>-Tipo: {this.props.infoPoke.tipo.join(", ")}</p>
                        <p>-Peso: {this.props.infoPoke.pesoKg} kg</p>
                        <p>-Altura: {this.props.infoPoke.alturaM} m</p>
                    </Col>
                    <Col>
                        <StatsRadar status={this.props.infoPoke.status}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PokeInfo
