import React, { useState } from "react";
import * as S from './ProjetosStyle'
import Cartoon from './images/projetos/cartoon.svg'
import Disney from './images/projetos/disney.svg'
import Witcher from './images/projetos/thewitcher.svg'
import Patrocinadores from './images/projetos/patrocinadores.svg'
import DoceArte from './images/projetos/doce-arte.svg'
import Contador from './images/projetos/contador.svg'

function Projetos(){

    const [imagem, setImagem] = useState(Cartoon)

    const desafios = [
        {
            id: 1,
            nome: 'Cartoon', 
            descricao: 'Projeto Cartoon Network - landing page criada utilizando a tecnologia JavaScript utilizando a biblioteca React, criada com objetivo de praticar os conceitos de componentização funcional de elementos, utilizando hooks  {useState} e os métodos .map() e .filter()', 
            imagem: {Cartoon}},
        {
            id: 2,
            nome: 'The Witcher', 
            descricao: 'Projeto The Witcher - landing page feita utilizando as tecnologias HTML e CSS, criada com objetivo de praticar os conceitos de posicionamento de objetos, utilizando o atributo position com os valores Absolute e Relative.',
            imagem:{Witcher}
         },
         {
            id: 3,
            nome: 'Disney Plus', 
            descricao: 'Projeto Disney Plus - landing page feita utilizando as tecnologias HTML e CSS, criada com objetivo de praticar os conceitos de caixas flexiveis utilizando o display:flex.',
            imagem:{Disney}
         }
    ]

     return(
        <>
        <S.Section>
        <S.H2>Meus Projetos</S.H2>
            <S.Div className="container">
                    <S.Card className="card-principal">
                    <S.ImgCard src={imagem} alt="Foto da tela do site" />
                </S.Card>
            </S.Div>
        </S.Section>
        <S.Projetos className="card-projetos">
      <S.Img onClick={()=>{setImagem(Cartoon)}}  src={Cartoon} alt="Foto da tela do site" />
      <S.Img onClick={()=>{
          setImagem(Disney)
      }} src={Disney} alt="Foto da tela do site" />
      <S.Img onClick={()=>{setImagem(Witcher)}} src={Witcher} alt="Foto da tela do site" />
      <S.Img onClick={()=>{setImagem(Patrocinadores)}}  src={Patrocinadores} alt="Foto da tela do site" />
      <S.Img onClick={()=>{
          setImagem(DoceArte)
      }} src={DoceArte} alt="Foto da tela do site" />
      <S.Img onClick={()=>{setImagem(Contador)}} src={Contador} alt="Foto da tela do site" />
      </S.Projetos>
        </>
    )
}

export default Projetos