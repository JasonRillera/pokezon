import React from 'react'
import styled from 'styled-components'
import CurrencyFormat from 'react-currency-format';

function CartTotal({ getTotalPrice, getCount }) {

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items):
            <span>
            <CurrencyFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </span>
            </Subtotal>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    flex: 0.3;
    padding: 20px;
    margin-top: 60px;
    margin-right: 50px;
    background-color:white;
    border-radius: 4px;
    position: fixed;
    left: 71.5%;
    width: 21%;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;
    font-weight: 400;
    span {
        margin-left: 4px;
        font-weight: 600;
    }
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    height: 38px;
    padding: 4px 8px;
    border: 2px solid #f0c14b;
    border-radius: 18px;
    cursor: pointer;
    font-size:16px;
    :hover {
        background: #ddb347;
    }
`