import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({ cartItems }) {
    return (
        <Container>
            <img src={"/pokeBanner2.png"} alt="" />
            <Title>
                Shopping Cart
            </Title>
            <hr/>
            <ItemsContainer>
                {
                    cartItems.map((item)=>(
                        <CartItem 
                            id={item.id}
                            item={item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container =  styled.div`
    flex: 0.7;
    padding: 20px;
    margin-top: 60px;
    margin-right: 18px;
    margin-left: 50px;
    margin-bottom: 30px;
    background-color: white;
    border-radius: 4px;
    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin-bottom: 5px;
    }
`

const Title =  styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 8px;
`
const ItemsContainer =  styled.div`
`