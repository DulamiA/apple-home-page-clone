import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    z-index:1400;
    width: 100%;
    height: 4.4rem;
    background-color: rgba(0,0,0,.75);
    backdrop-filter: blur(2rem);
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    max-width:98rem;
    margin: 0 auto;
    padding: 0 2.2rem;
    display: flex;
    justify-content: space-between;
`

export const NavMenue = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 780px){
        display: none;
    }
`

export const NavLogoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    opacity: .8;

    &:hover {
        opacity: .98;
        transition: 300ms ease-in;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    text-decoration: none;
    padding-left: 2rem;
    padding-right: 1.5rem;
    height: 100%;
    cursor: pointer;
    opacity: .8;

    &:hover {
        opacity: .98;
        transition: 300ms ease-in;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`



