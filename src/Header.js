import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

function Header({ cartItems, user, signOut }) {

    const getCount = () => {
        let count = 0;
        // LOOP THROUGH ALL THE CART ITEMS
        cartItems.forEach((item) => {
            // ADD THE QUANTITY OF THE CART TO TOTAL
            count += item.product.quantity
        })
        return count;
    }

    return (
        <div> 
            <Container>
                <HeaderLogo>
                    <Link to="/">
                    <img src={"/pokezonLogoWhite.png"}/>
                    </Link>
                </HeaderLogo>
                <HeaderSearch>
                    <HeaderSearchInput type='text'/>
                    <HeaderSearchIconContainer>
                        <SearchIcon />
                    </HeaderSearchIconContainer>
                </HeaderSearch>
                <HeaderNavItems>
                    <HeaderOptionHello onClick={signOut}>
                        <OptionLineOne>Hello, {user.name}</OptionLineOne>
                        <OptionLineTwo>Click To Logout</OptionLineTwo>
                    </HeaderOptionHello>
                    <HeaderOption>
                        <OptionLineOne>Returns</OptionLineOne>
                        <OptionLineTwo>& Orders</OptionLineTwo>
                    </HeaderOption>
                    <HeaderOptionCart>
                        <Link to="/cart">
                            <ShoppingCartIcon />
                            <CartCount>{getCount()}</CartCount> 
                        </Link>
                    </HeaderOptionCart>
                </HeaderNavItems>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;  

`
const HeaderLogo = styled.div`
    img{
        width: 130px;
        margin-left: 11px;
        margin-right: 8px;
    }
`

const OptionLineOne = styled.div`
`
const OptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left:5px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }

`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus{
        outline: none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #f0c14b;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
        width: 75%;
        height: 75%;
    }
`
const HeaderNavItems = styled.div`
    display: flex;
`

const HeaderOptionHello = styled.div`
    font-size: 15px;
    padding: 10px 10px 10px 30px;
    cursor: pointer;
`

const HeaderOption = styled.div`
    font-size: 15px;
    padding: 10px 10px;
    cursor: pointer;
`
const HeaderOptionCart = styled.div`
    display: flex;
    a{
        display: flex;
        align-items: center;
        padding-left: 20px;
        padding-right: 25px;
        color: white;
        text-decoration: none;
    }
    svg {
        font-size: 40px;
    }

`
const CartCount = styled.div`
    padding-left: 4px;
    color: #F8991C;
    font-weight: 700;
`
