import React from "react";
import * as S from './ContatosStyle'
import Whatsapp from './images/inicio/whats.svg'
import Email from './images/inicio/email.svg'
import LinkedIn from './images/inicio/linkedin.svg'
import Github from './images/inicio/github.svg'
import Figura from './images/contatos/figura.svg'

function Contatos(){
    return(
        <>
        <S.Section>
            <S.Div>
                <S.P>Para obter maiores informações, dúvidas ou comentários, preencha o formulário ao lado. Entrarei em contato em breve.</S.P>

                <S.ImgF src={Figura} alt="" />

                <S.Social>
                    <a href="https://wa.me/5521965371679" target="_blank"><S.Img src={Whatsapp} alt="Logo do Whatsapp" /></a>
                    <a href="mailto:rmota.devgmail.com" target="_blank"><img src={Email} alt="Icone de Email" /></a>
                    <a href="https://www.linkedin.com/in/roberta-mota-20937b295/" target="_blank"><S.Img src={LinkedIn} alt="Logo do LinkedIn" /></a>
                    <a href="https://github.com/robertapdm" target="_blank"><S.Img src={Github} alt="Logo do Github" /></a>
                </S.Social>
            </S.Div>
        <S.Form action="mailto:robertafarmacogmail.com" method="POST">
        <S.H3>Entre em contato:</S.H3>
        <S.Input type="text" placeholder="Digite o seu nome aqui" />
        <S.Input type="email" placeholder="Digite seu e-mail aqui"/>
        <S.Div1>
        <S.H3>Deixe o seu comentário aqui:</S.H3>
            <S.Textarea name="mensagem" id="mensagem" cols="50" rows="6" maxLength={500}></S.Textarea>
        </S.Div1>
        </S.Form>
        </S.Section>
        </>

    )
}

export default Contatos