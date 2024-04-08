import styled from "styled-components";

export const Section = styled.section`
width: 70%;
height: 80vh;  
display: flex;
margin: 0 20%;
border: 2px solid #65b8917f;
position: relative;

@media screen and (max-width:768px){
    width: 100%;
    height: 120vh;
    margin: 0;
    flex-direction: column;
}
`
export const Div = styled.div`
width: 70%;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

@media screen and (max-width:768px){
    width: 100%;
    height: 120vh;
}
`
export const P = styled.p`
width: 300px;
text-align: justify;

@media screen and (max-width:768px){
    width: 80vw;
    margin: 20px;
    flex-direction: column;
}
`
export const ImgF = styled.img`
width:250px;
margin: 20px;

@media screen and (max-width:768px){
    width: 220px;
    margin: 10px 0 20px 0 ;
}
`
export const Social = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width:768px){
    margin: 20px;
}
`
export const Img = styled.img`
width:25px
`
export const Form = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background: rgb(78,135,140);
background: linear-gradient(209deg, rgba(78,135,140,1) 0%, rgba(101,184,145,1) 50%, rgba(181,255,225,1) 100%);
padding: 5rem;

@media screen and (max-width:768px){
padding: 3.5rem;
margin: 0;
}
`
export const Input = styled.input`
width: 85%;
margin: 10px 0;
border: 1px solid #818181;
border-radius: 5px;

@media screen and (max-width:768px){
    width: 70vw;
}
`
export const Div1 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

@media screen and (max-width:768px){
    width: 70vw;
    margin: 0;
}
`
export const H3 = styled.h3`
margin-top: 30px;
`
export const Textarea = styled.textarea`
resize: none;
margin: 20px 0;

@media screen and (max-width:768px){
    width: 70vw;
}
`
export const Div2 = styled.div`
width: 86%;
height: 100%;
display: flex;
justify-content: flex-end;

@media screen and (max-width:359px){
width: 110%;
}

@media screen and (min-width:360px) and (max-width:768px){
width: 100%;
}
`
export const Btn = styled.input`
width: 20%;
margin: 10px 0;
border: 1px solid #818181;
border-radius: 5px;
background-color: #b2d7da;
color: #000000;
font-weight: 600;
cursor: pointer;
`
