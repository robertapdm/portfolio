import React from "react";
import * as S from './SobreStyle'
import Footer from './images/inicio/barra-site.png'
import Tela from './images/sobre/tela-pc.jpg'
import Cartoon from './images/sobre/cartoon.png'

function Sobre(){
    return(
        <>
        <S.Section>
            <S.Div1>
                <S.H2>Desenvolvedora Web Front-End Junior apaixonada por tecnologia e em constante evolução. </S.H2>

                <S.H3>Formação:</S.H3>
                <S.Ul>
                    <li>Tecnologia em Ciências da Computação - UFF/Cederj (2023-Atual)</li>
                    <li>Desenvolvimento Web Front-End = Vai na Web (Set/23 - Atual)
                        <ul>
                            <li>Html, Css, Javascript e React</li>
                            <li>GitHub</li>
                            <li>Cloud - AWS</li>
                        </ul>
                    </li>
                    <li>Formação Full Stack B7Web (Nov/2022 - Atual)
                        <ul>
                            <li>Html, Css, Javascript e React</li>
                            <li>GitHub</li>
                        </ul>
                    </li>
                </S.Ul>
            </S.Div1>
            <S.Div2>
                <S.Tela src={Tela} alt="Imagem de uma tela de computador" />
                <S.Projeto src={Cartoon} alt="Imagem de um projeto realizado com tema Cartoon Network" />
            </S.Div2>
        </S.Section>
            <footer>
            <S.ImgFooter src={Footer} alt="" />
            </footer>
        </>
    )
}

export default Sobre