import styled from "styled-components";

export const Section = styled.section`
height: 60vh;
display: flex;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 768px) {
height: 50vh;
flex-direction: column;
}
`
export const Div = styled.div`
width: 40%;
height: 360px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
}
`
export const H1 = styled.h1`
width: 500px;
font-size: 2rem;
text-align: left;
margin: 15px;

@media screen and (max-width: 768px) {
    width: 85vw;
    font-size: 1.3rem;
}
`
export const H2 = styled.h1`
width: 500px;
font-size: 1.1rem;
text-align: left;
margin: 15px;

@media screen and (max-width: 768px) {
    width: 85vw;
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 50px;
}
`
export const Span = styled.span`
color: rgba(101,184,145,1);
text-shadow: #000000 3px 2px 1px;
font-size: 3rem;

@media screen and (max-width: 768px) {
    font-size: 1.7rem;
}
`
export const Social = styled.div`
width: 500px;
height: 50px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 25px;
border-radius: 20px;
background: rgb(78,135,140);
background: linear-gradient(209deg, rgba(78,135,140,1) 0%, rgba(101,184,145,1) 50%, rgba(181,255,225,1) 100%);

@media screen and (max-width: 768px) {
    width: 100%;
    margin: 50px 0 0 0;
}
`
export const Img = styled.img`
width:25px;
`
export const ImgFoto = styled.img`
width: 300px;
border-radius: 50%;
margin-right: 100px;
box-shadow: 0 0 20px 20px rgba(181,255,225,1);

@media screen and (max-width: 768px) {
 display: none;
}
`
export const ImgMob = styled.img`
display: none;
@media screen and (max-width: 768px) {
    display: initial;
    width: 200px;
    margin: 0 50px;
    border-radius: 50%;
    box-shadow: 0 0 20px 20px rgba(181,255,225,1);
}

`