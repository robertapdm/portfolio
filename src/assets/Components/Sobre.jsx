import React from "react";
import * as S from './SobreStyle'
import Html from './images/sobre/html.svg'
import Css from './images/sobre/css.svg'
import Js from './images/sobre/javascript.svg'
import ReactLogo from './images/sobre/react.svg'
import Git from './images/sobre/git.svg'
import GitHub from './images/sobre/github.svg'
import Figma from './images/sobre/figma.svg'
import Styled from './images/sobre/styled-components.svg'

function Sobre(){
    return(
        <>
            <S.Titulo>
                <S.H2>Desenvolvedora Web Front-End Junior apaixonada por tecnologia e em constante evolução. </S.H2>
            </S.Titulo>
            <S.Section>
                <S.Section1>
                <S.H3>Pessoal:</S.H3>
                <div>
                    <p>Meu nome é Roberta, tenho 29 anos, sou apaixonada por conhecimento, sempre busco aprender novas habilidades, conhecer novas tecnologias e como aplicá-las em meus projetos.</p>
                    <p>Em 2023 me aventurei a aprender programação com foco em desenvolvimento web front-end e me dedicar a absorver os conceitos para colocá-los em prática. 
                    </p>
                    <p>Falo Português (língua nativa),  Inglês (intermediário) e estou aprendendo Italiano (básico).
                    </p>
                </div>
                </S.Section1>
                <S.Hr />
            <S.Section2>
            <S.H3>Formação:</S.H3>
                <div>
                    <h3>Tecnologia em Sistemas da Computação</h3>
                    <p>UFF/Cederj (Jan/2023 - Atual)</p>
                </div>
                <div>
                    <h3>Desenvolvimento Web Front-End</h3>
                    <p>Vai na Web (Set/23 - Atual)</p>
                </div>
                <div>
                    <h3>Formação Full Stack B7Web</h3>
                    <p>B7Web (Nov/2022 - Atual)</p>
                </div>
            </S.Section2>
            <S.Hr />
            <S.Section3>
            <S.H3>Habilidades:</S.H3>
                    <S.Card>
                    <S.Img1 src={Html} alt="Logo do Html" /></S.Card>
                    <S.Card>
                    <S.Img2 src={Css} alt="Logo do Css" /></S.Card>
                    <S.Card><S.Img2 src={Js} alt="Logo do JavaScript" /></S.Card>
                    <S.Card><S.Img2 src={ReactLogo} alt="Logo do React" /></S.Card>
                    <S.Card><S.Img2 src={Git} alt="Logo do Git" /></S.Card>
                    <S.Card><S.Img2 src={GitHub} alt="Logo do GitHub" /></S.Card>
                    <S.Card><S.Img2 src={Styled} alt="Logo do styled-components" /></S.Card>
                    <S.Card><S.Img3 src={Figma} alt="Logo do Figma" /></S.Card>
                </S.Section3>
        </S.Section>
        </>
    )
}

export default Sobre