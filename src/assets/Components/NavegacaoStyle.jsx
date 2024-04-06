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

@media screen and (max-width: 768px) {
margin: 0;
}
`
export const Ul = styled.ul`
width: 50%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 0 0 0 200px ;
list-style: none;

@media screen and (max-width: 768px) {
    display: none;
 }
`
export const Menu = styled.img`
display: none;
@media screen and (max-width: 768px) {
display: initial;
}
`