import styled from "styled-components";

export const Titulo = styled.div`
display: flex;
justify-content: center;
`
export const H2 = styled.h2`
width: 640px;
margin: 50px;
text-align: center;

@media screen and (max-width:768px) {
 text-align: center;
 width: 70vw;
 font-size: 1.2rem;
}
`
export const Section = styled.section`
display: flex;
justify-content: space-between;
margin: 50px;

@media screen and (max-width:768px) {
    flex-direction: column;
    margin: 0 20px;
}
`
export const H3 = styled.h3`
width: 400px;
text-align: center;
margin: 0  0 30px 0;

@media screen and (max-width:768px) {
    width: 100vw;
}
`
export const Section1 = styled.section`
width: 30%;
text-align: justify;

@media screen and (max-width:768px) {
    width: 100%;
}
`
export const Section2 = styled.section`
height: 40vh;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (max-width:359px) {
height: 50vh;
}
`
export const Hr =  styled.hr`
width: 3px;
height: 70vh;
background-color: #000000;

@media screen and (max-width:768px) {
    width: 90vw;
    height: 3px;
    margin: 20px 0;
}
`
export const Section3 = styled.section`
width: 20%;
height: 300px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

@media screen and (max-width:359px) {
    width: 90vw;
    justify-content: space-evenly;
}

@media screen and (min-width:360px) and (max-width:768px) {
    width: 79vw;
    justify-content: space-evenly;
}
`
export const Card = styled.div`
width: 100px;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color: #eeeeee67;
transition: all 0.3s;

&:hover{
    background-color: #bad79e7c;
    scale: 1.1;
}

@media screen and (max-width:359px) {
    width: 60px;
    margin-bottom: 30px;
}
`
export const Img1 = styled.img`
width: 50px;
`
export const Img2 = styled.img`
width: 60px;
`
export const Img3 = styled.img`
width: 40px;
`