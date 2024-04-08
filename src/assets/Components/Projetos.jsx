import React, { useState, useEffect, useRef } from "react";
import * as S from "./ProjetosStyle";
import Cartoon from "./images/projetos/cartoon.svg";
import Disney from "./images/projetos/disney.svg";
import Witcher from "./images/projetos/thewitcher.svg";
import Patrocinadores from "./images/projetos/patrocinadores.svg";
import DoceArte from "./images/projetos/doce-arte.svg";
import Contador from "./images/projetos/contador.svg";
import { motion } from "framer-motion";

function Projetos() {
  const [imagem, setImagem] = useState(Cartoon);

  const [desafios, setDesafios] = useState([
    {
      id: 1,
      nome: "Cartoon",
      alt: "Foto do projeto Cartoon Network",
      descricao:
        "Projeto Cartoon Network - landing page criada utilizando a tecnologia JavaScript utilizando a biblioteca React, criada com objetivo de praticar os conceitos de componentização funcional de elementos, utilizando hooks  {useState} e os métodos .map() e .filter().",
      imagem: Cartoon,
      url: "https://cartoon-network-livid.vercel.app/",
    },
    {
      id: 2,
      nome: "The Witcher",
      alt: "Foto do projeto The Witcher",
      descricao:
        "Projeto The Witcher - landing page feita utilizando as tecnologias HTML e CSS, criada com objetivo de praticar os conceitos de posicionamento de objetos, utilizando o atributo position com os valores Absolute e Relative.",
      imagem: Witcher,
    },
    {
      id: 3,
      nome: "Disney Plus",
      alt: "Foto do projeto Disney Plus",
      descricao:
        "Projeto Disney Plus - landing page feita utilizando as tecnologias HTML e CSS, criada com objetivo de praticar os conceitos de caixas flexiveis utilizando o display:flex.",
      imagem: Disney,
    },
    {
      id: 4,
      nome: "Patrocinadores",
      alt: "Foto do projeto Patrocinadores",
      descricao:
        "Projeto Patrocinadores - landing page feita utilizando a tecnologia JavaScript utilizando a biblioteca React, criada com objetivo de praticar o hook userEffect.",
      imagem: Patrocinadores,
    },
    {
      id: 5,
      nome: "Doce Arte",
      alt: "Foto do projeto Doce Arte",
      descricao:
        "Projeto Doce Arte - landing page feita utilizando a tecnologia JavaScript utilizando a biblioteca React, criada com objetivo de praticar os hooks useState e useEffect, os métodos setIterval e clearInterval.",
      imagem: DoceArte,
    },
    {
      id: 6,
      nome: "Contador",
      alt: "Foto do projeto Contador",
      descricao:
        "Projeto Contador - landing page feita utilizando a tecnologia JavaScript utilizando a biblioteca React, criada com objetivo de praticar o hooks useState.",
      imagem: Contador,
    },
  ]);

  const carrossel = useRef();

  const [width, setWidth] = useState(0)

  useEffect(()=>{
    console.log(carrossel.current?.scrollWidth);     
    console.log(carrossel.current?.offsetWidth);
    setWidth( carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  },[])

  return (
    <S.Section>
      <S.Section>
        <S.H2>Meus Projetos</S.H2>
        <S.Div className="container">
          <S.Card className="card-principal">
            <S.ImgCard src={imagem} alt="Foto da tela do site" />
          </S.Card>
        </S.Div>
      </S.Section>
      <S.Carrossel as={motion.div} ref={carrossel} whileTap={{cursor: "grabbing"}}>
        <S.Projetos as={motion.div} drag="x" dragConstraints={{right:0, left:-width}} initial={{x:100}} animate={{x:0}} transition={{duration:1}}>
          <S.CardProjetos               onClick={() => {
                setImagem(Cartoon);
              }}>
            <S.Img
              src={Cartoon}
              alt="Foto da tela do site"
            />
            <S.Link>
              <S.A href="https://cartoon-network-livid.vercel.app/" target="_blank">Projeto</S.A>
              <S.A href="https://github.com/robertapdm/Cartoon-Network" target="_blank">Código</S.A>
            </S.Link>
          </S.CardProjetos>
          <S.CardProjetos               onClick={() => {
                setImagem(Disney);
              }}>
            <S.Img
              src={Disney}
              alt="Foto da tela do site"
            />
            <S.Link>
              <S.A href="https://robertapdm.github.io/disneyPlus/" target="_blank">Projeto</S.A>
              <S.A href="https://github.com/robertapdm/disneyPlus" target="_blank">Código</S.A>
            </S.Link>
          </S.CardProjetos>
          <S.CardProjetos onClick={() => {
                setImagem(Witcher);
              }}>
            <S.Img
              src={Witcher}
              alt="Foto da tela do site"
            />
            <S.Link>
              <S.A href="https://the-witcher-flame.vercel.app/" target="_blank">Projeto</S.A>
              <S.A href="https://github.com/robertapdm/the-witcher" target="_blank">Código</S.A>
            </S.Link>
          </S.CardProjetos>
          <S.CardProjetos onClick={() => {
                setImagem(Patrocinadores);
              }}>
            <S.Img
              src={Patrocinadores}
              alt="Foto da tela do site"
            />
            <S.Link>
              <S.A href="">Projeto</S.A>
              <S.A href="">Código</S.A>
            </S.Link>
          </S.CardProjetos>
          <S.CardProjetos onClick={() => {
                setImagem(DoceArte);
              }}>
            <S.Img
              src={DoceArte}
              alt="Foto da tela do site"
            />
            <S.Link>
              <S.A href="">Projeto</S.A>
              <S.A href="">Código</S.A>
            </S.Link>
          </S.CardProjetos>
          <S.CardProjetos onClick={() => {
                setImagem(Contador);
              }}>
            <S.Img
              onClick={() => {
                setImagem(Contador);
              }}
              src={Contador}
              alt="Foto da tela do site"
            />
            <S.Link>
              <S.A href="">Projeto</S.A>
              <S.A href="">Código</S.A>
            </S.Link>
          </S.CardProjetos>
        </S.Projetos>
      </S.Carrossel>
    </S.Section>
  );
}

export default Projetos;
