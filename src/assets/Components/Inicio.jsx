import React from "react";
import * as S from './InicioStyle.jsx'
import Foto from './images/inicio/roberta.jpg'
import Whatsapp from './images/inicio/whats.svg'
import Email from './images/inicio/email.svg'
import LinkedIn from './images/inicio/linkedin.svg'
import Github from './images/inicio/github.svg'

function Inicio(){
    return(
        <S.Section>
        <S.Div>
        <S.H1>Olá, sou <S.Span> Roberta Mota</S.Span></S.H1>
        <S.H2>Seja bem-vindo ao meu portfólio! Desenvolvedora web front-end explorando a web com projetos inovadores e comprometida com a excelência.</S.H2>
        <S.Social>
            <a href="https://wa.me/5521965371679" target="_blank"><S.Img src={Whatsapp} alt="Logo do Whatsapp" /></a>
            <a href="mailto:rmota.devgmail.com" target="_blank"><img src={Email} alt="Icone de Email" /></a>
            <a href="https://www.linkedin.com/in/roberta-mota-20937b295/" target="_blank"><S.Img src={LinkedIn} alt="Logo do LinkedIn" /></a>
            <a href="https://github.com/robertapdm" target="_blank"><S.Img src={Github} alt="Logo do Github" /></a>

        </S.Social>

        </S.Div>
        <S.ImgFoto src={Foto} alt="Foto da Desenvolvedora do Portfólio" />
    </S.Section>
    )
}

export default Inicio