import React, { useState } from "react";
import Inicio from './Inicio'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Contatos from './Contatos'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import * as S from './NavegacaoStyle'
import Logo from './images/inicio/logo.png'

function Navegacao(){

    return(
        <BrowserRouter>
        <S.Nav>
            <S.ImgLogo src={Logo} alt="Logo Roberta Mota Desenvolvedora Web Front-End" />
            <S.Ul>
                <li> <Link to= "/">Início</Link></li>
                <li> <Link to= "/Sobre">Sobre</Link></li>
                <li> <Link to= "/Projetos">Projetos</Link></li>
                <li> <Link to= "/Contatos">Contatos</Link></li>
            </S.Ul>
        </S.Nav>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Sobre" element={<Sobre/>} />
            <Route path="/Projetos" element={<Projetos/>}/>
            <Route path="/Contatos" element={<Contatos/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Navegacao
