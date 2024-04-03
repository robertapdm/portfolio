import React from "react";
import * as S from './InicioStyle.jsx'
import Foto from './images/inicio/roberta.jpg'
import Footer from './images/inicio/barra-site.png'

function Inicio(){
    return(
        <section>
        <S.Section>
        <S.Div>
        <S.H1>Olá, sou <S.Span> Roberta Mota</S.Span></S.H1>
        <S.H2>Seja bem-vindo ao meu portfólio! Desenvolvedora web front-end explorando a web com projetos inovadores e comprometida com a excelência.</S.H2>
        <S.DivButton>
            <S.Button type="submit">
                Projetos
            </S.Button>
            <S.Button>
                Contatos
            </S.Button>
        </S.DivButton>
        </S.Div>
        <S.ImgFoto src={Foto} alt="Foto da Desenvolvedora do Portfólio" />
    </S.Section>
        <footer>
            <S.ImgFooter src={Footer} alt="" />
        </footer>
    </section>
    )
}

export default Inicio