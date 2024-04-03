import styled, {keyframes} from "styled-components";

export const Titulo = styled.div`
display: flex;
justify-content: center;
`
export const H2 = styled.h2`
width: 640px;
margin: 50px;
text-align: center;
`
export const Section = styled.section`
display: flex;
justify-content: space-between;
margin: 50px;
`
export const H3 = styled.h3`
width: 400px;
text-align: center;
margin: 0  0 30px 0;
`
export const Section1 = styled.section`
width: 30%;
text-align: justify;
`
export const Section2 = styled.section`
height: 40vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const Hr =  styled.hr`
width: 3px;
height: 70vh;
background-color: #000000;
`
export const Section3 = styled.section`
width: 20%;
height: 300px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
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
export const ImgFooter = styled.img`
width: 100%;
height: 150px;
object-fit: fill;
`