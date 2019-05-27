import React, { Component } from 'react'

import Header from './components/Header/Header.js'
//import Input from './components/Form/Input'
//import SearchPokeForm from './components/Form/SearchPokeForm'
import SearchPokePage from './pages/SearchPokePage/SearchPokePage.js'

export class App extends Component {
  render() {
    return (
    <div className="text-center">
        <Header/>
        <SearchPokePage/>
      </div>
    )
  }
}

export default App
