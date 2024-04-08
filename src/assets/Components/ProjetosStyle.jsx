import styled from "styled-components";

export const Section = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width:768px){
    height: 80vh;
}
`
export const H2 = styled.h2`
margin: 0  0 25px 0;

@media screen and (max-width:768px){
 margin: 10px 0;
}
`
export const Div = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;

@media screen and (max-width:768px){
    height: 30vh;
}
`
export const Card = styled.div`
width: 60%;
height: 55vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ImgCard = styled.img`
width: 100%;
border-radius: 10px;
pointer-events: none;

@media screen and (max-width:768px){
    width: 90vw;
}
`
export const Carrossel = styled.div`
width: 100vw;
cursor: grab;
display: flex;
justify-content: center;
align-items: center;
`
export const Projetos = styled.div`
width: 100%;
height: 28vh;
display: flex;
justify-content: space-evenly;
align-items: flex-start;
`
export const CardProjetos = styled.div`
width: 100%;
max-width: 250px;
height: 24vh;
border: 1px solid #65b8917f;
border-radius: 10px;
margin: 3px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
box-shadow: 0 2px 2px;

@media screen and (max-width:359px) {
    width: 100vw;
    height: 24vh;
}
@media screen and (min-width:360px) and (max-width:768px) {
    width: 100vw;
    height: 18vh;
}
`
export const Link = styled.div`
width: 100%;
height: 10vh;
border-top: 1px solid #65b8917f;
display: flex;
justify-content: space-evenly;
align-items: center;
`
export const A = styled.a`
width: 46%;
height: 40%;
border-radius: 5px;
font-size: 0.7rem;
font-weight: 600;
text-align: center;
background:rgba(101,184,145,1);
color: #000000;
box-shadow: 0 2px 2px;
`
export const Img = styled.img`
width: 240px;
height: 100%;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
pointer-events: none;

@media screen and (max-width:768px){
    width: 50vw;
    height: 70px;
}
`