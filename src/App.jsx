import React from 'react'
import {createGlobalStyle} from 'styled-components'
import Navegacao from './assets/Components/Navegacao.jsx'

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Open Sans';
}
`

function App() {

  return (
    <>
    <GlobalStyle/>
    <Navegacao/>
    </>
  )
}

export default App
