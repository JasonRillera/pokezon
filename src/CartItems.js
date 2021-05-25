import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({ cartItems }) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
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
    background-color: white;
    border-radius: 4px;
`

const Title =  styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 8px;
`
const ItemsContainer =  styled.div`
`