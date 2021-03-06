import React from "react";
import styled from "styled-components";
import { links } from '../utils/constants';
import { Link, useLocation } from 'react-router-dom';
import Burger from './Burger';
import Cart from './Cart';
import { toAbsolute } from "../utils/heleprs";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../slice/addCartSlice";


const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
   const data = useSelector((state) => state.cart.carts);
  return (
    <Wrapper
      className={`${location.pathname === '/' ? 'light-bgc' : 'black-bgc'}`}
    >
      <div className='container header__container'>
        <Burger />
        <Link to='/' className='logo'>
          <img src={toAbsolute("/shared/desktop/logo.svg")} alt='logo' />
        </Link>
        <Nav>
          <ul className='nav__list'>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link className='nav-link' to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Nav>
        <div className='cart-icon-container'>
          <img
            className='cart-image'
            src={toAbsolute("/shared/desktop/icon-cart.svg")}
            alt='cart'
            onClick={() => dispatch(toggleModal())}
          />
          <span className='cart-count'>{data.length}</span>
        </div>
        <Cart />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: grid;
  place-items: center;
  color: var(--clr-white);
  height: 5.625rem;
  .logo {
    max-height: 1.565rem;
  }
  nav {
    display: none;
  }
  .header__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cart-image {
      cursor: pointer;
    }
    .cart-icon-container {
      position: relative;
      .cart-count {
        text-align: center;
        width: 1.2rem;
        line-height: 1.2rem;
        position: absolute;
        top: -0.5rem;
        left: 1rem;
        background-color: var(--clr-primary-1);
        border-radius: 50%;
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .logo {
      margin-right: 26rem;
    }
  }
  @media screen and (min-width: 1280px) {
    .logo {
      margin: 0;
    }
    nav {
      display: grid;
    }
  }
`;

const Nav = styled.nav`
  .nav__list {
    display: flex;
    gap: 34px;
  }
`;
export default Header;