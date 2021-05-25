import React from 'react'
import styled from 'styled-components'

import { auth, provider } from './firebase'

function Login({ setUser }) {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser);
        }).catch((error)=>{
            alert(error.message);
        })
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src='/pokezonLogoBlack.png' /><br />
                <h1>Welcome to Pokezon</h1>
                <LoginButton
                    onClick = {signIn}
                >
                    <img src="/google.svg" alt=""/>
                    &nbsp; &nbsp; &nbsp;Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;

`

const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
    h1 {
        color: #292929;  
    }
`

const AmazonLogo = styled.img`
    height: 80px;
    margin-bottom: 40px
`

const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding: 20px 10px;
    height: 40px;
    margin-top: 15px;
    background-color: #f0c14b;
    border: 2px solid #f0c14b;
    border-radius: 25px;
    cursor: pointer;
    :hover {
        background: #ddb347;
    }
`