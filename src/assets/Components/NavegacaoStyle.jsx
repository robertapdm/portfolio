import styled from "styled-components";

export const Nav = styled.nav`
width: 100%;
height: 100px;
display: flex;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 768px) {
justify-content: space-between;
padding: 0 50px;
}
`
export const ImgLogo = styled.img`
width: 50px;
margin: 0 100px 0 70px ;

@media screen and (max-width: 359px) {
margin: 0 30px 0 0;
}

@media screen and (min-width:360px) and (max-width: 768px) {
margin: 0;
}
`
export const Ul = styled.ul`
width: 50%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 0 0 0 200px;
list-style: none;

@media screen and (max-width: 359px) {
width: 100%;
height: 10vh;
margin: 0;
flex-wrap:wrap;
justify-content: space-between;
 }

 @media screen and (min-width:360px) and (max-width: 768px) {
width: 60%;
height: 10vh;
margin: 0;
padding: 10px;
flex-wrap: wrap;
justify-content: space-between;
 }
`