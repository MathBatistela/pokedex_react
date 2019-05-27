import React, { Component } from 'react'
import SearchPokeForm from "../../components/Form/SearchPokeForm"
import { Container, Image } from 'react-bootstrap'
import {getPokeByName} from "../../utils/API"

export class SearchPokePage extends Component {
    state = {
        nomePoke: ""
    }

    onChange = (e) => {
        this.setState({
            nomePoke: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        getPokeByName(this.state.nomePoke).then (res => {
            console.log(res)
        }).catch(ex => {
            console.log(ex)
            if(ex.response.status === 404) {
                alert("Pokémon não encontrado")
            }
        }).finally(() =>{
            this.setState({
                nomePoke: ""
            })
        }) 
    } 

    render() {
        return (
            <Container>
                <Image height= "100px" style={{marginTop: "40px", marginBottom: "20px"}} src={require("../../images/pokeball.png")}/>
                <SearchPokeForm nome={this.state.nomePoke} onChange={this.onChange} onSubmit={this.onSubmit}/>
                <hr/>
            </Container>
        )
    }
}

export default SearchPokePage
