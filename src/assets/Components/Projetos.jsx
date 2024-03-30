import React, { useEffect, useState } from "react";
import * as S from './ProjetosStyle'
import Footer from './images/inicio/barra-site.png'
import Cartoon from './images/sobre/cartoon.png'
import Disney from './images/projetos/disney.png'
import Witcher from './images/projetos/thewitcher.png'

function Projetos(){
    const [imagem, setImagem] = useState(Cartoon)

    /*const [legenda, setLegenda] = useState([
        {nome: 'Cartoon', legenda: 'Projeto Cartoon Network - landing page criada utilizando a tecnologia JavaScript utilizando a biblioteca React, criada com objetivo de praticar os conceitos de componentização funcional de elementos, utilizando hooks  {useState} e os métodos .map() e .filter()' },

        {nome: 'The Witcher', legenda: 'Projeto The Witcher - landing page feita utilizando as tecnologias HTML e CSS, criada com objetivo de praticar os conceitos de posicionamento de objetos, utilizando o atributo position com os valores Absolute e Relative.' }
    ])*/

    useEffect(()=>{
        if (imagem === Cartoon){
        } else if (imagem === Disney){
        } else if (imagem === Witcher){
        }
    })

    return(
        <>
        <S.Section>
        <h2>Meus Projetos</h2>
            <S.Div className="container">
            <S.Card className="card-principal">
            <img src={imagem} alt="" />
            </S.Card>
            <S.P>'Projeto Cartoon Network - landing page criada utilizando a tecnologia JavaScript utilizando a biblioteca React, criada com objetivo de praticar os conceitos de componentização funcional de elementos, utilizando hooks  {useState} e os métodos .map() e .filter()'</S.P>
            </S.Div>
            <S.Projetos className="card-projetos">
            <S.Img onClick={()=>{setImagem(Cartoon)}} src={Cartoon} alt="" />
            <S.Img onClick={()=>{
                setImagem(Disney)
            }} src={Disney} alt="" />
            <S.Img onClick={()=>{setImagem(Witcher)}} src={Witcher} alt="" />
            </S.Projetos>
        </S.Section>
        <footer>
            <S.ImgFooter src={Footer} alt="" />
            </footer>
        </>
    )
}

export default Projetos