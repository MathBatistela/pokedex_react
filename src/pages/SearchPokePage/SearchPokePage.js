import React, { Component } from 'react'
import SearchPokeForm from "../../components/Form/SearchPokeForm"
import { Container, Image } from 'react-bootstrap'
import {getPokeByName} from "../../utils/API"
import PokeInfo from "../../components/PokeInfo"

export class SearchPokePage extends Component {
    state = {
        nomePoke: "",
        infoPoke: ""
    }

    onChange = (e) => {
        this.setState({
            nomePoke: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        getPokeByName(this.state.nomePoke.toLowerCase()).then(res => {
            const infoPoke = {}
            infoPoke.nome = res.data.name
            infoPoke.id = res.data.id
            infoPoke.pesoKg = res.data.weight /10
            infoPoke.alturaM = res.data.height /10
            infoPoke.status = {}
            res.data.stats.forEach( status => {
                infoPoke.status[status.stat.name.replace("-","")] = status.base_stat
            })
            infoPoke.img = res.data.sprites.front_default
            infoPoke.tipo = res.data.types.map(value =>(
                value.type.name))

            console.log(infoPoke)
            this.setState({
                infoPoke
            })

        }).catch(ex => {
            console.log(ex)
            console.log(this.state.nomePoke)
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
                {
                    Object.keys(this.state.infoPoke).length !== 0 &&
                    <PokeInfo infoPoke= {this.state.infoPoke}/>   
                }
            </Container>
        )
    }
}

export default SearchPokePage
