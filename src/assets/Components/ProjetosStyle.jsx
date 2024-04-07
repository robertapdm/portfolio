import styled from "styled-components";

export const Section = styled.section`
width: 100%;
height: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width:768px){
    height: 45vh;
}
`
export const H2 = styled.h2`
margin: 25px 0 0 0;

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

@media screen and (max-width:768px){
    width: 90vw;
}
`
export const Projetos = styled.div`
width: 100vw;
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: flex-start;
overflow-x: scroll;
`
export const Img = styled.img`
width: 200px;
height: 100%;

@media screen and (max-width:768px){
    width: 50vw;
    height: 70px;
}
`