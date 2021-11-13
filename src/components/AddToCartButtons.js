import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { addCart, cartTotalReducer } from '../slice/addCartSlice';

const AmountButton = (data) => {
  const [quantity, setAmount] = useState(1);
  const cart = useSelector((state) => state.cart.carts)
  const dispatch = useDispatch();
  const increase = () => {
    setAmount((oldAmount) => {
      const newAmount = oldAmount + 1;
      return newAmount;
    });
  };
  useEffect(() =>{
   dispatch(cartTotalReducer())
  },[cart])

  const decrease = () => {
    setAmount((oldAmount) => {
      if (oldAmount <= 1) {
        return setAmount(1);
      } else {
        const newAmount = oldAmount - 1;
        return newAmount;
      }
    });
  };
    const addCarts = () => {
      const info = {...data,quantity}
     dispatch(addCart(info))
    }

  return ( 
    <Wrapper>
      <Container>
        <Amount onClick={decrease}>-</Amount>
        <span>{quantity}</span>
        <Amount onClick={increase}>+</Amount>
      </Container>
      <button className='btn-1' onClick={addCarts}>
        add to cart
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  font-family: Manrope;
  font-weight: bold;
  display: flex;
  font-size: var(--fs-mili);
  background-color: var(--clr-base);
  span {
    text-align: center;
    width: 2.5rem;
    line-height: 3rem;
  }
`;
const Amount = styled.span`
  font-size: 1rem;
  display: block;
  color: var(--clr-grey-3);
  cursor: pointer;
  transition: var(--general-transition);
  ::selection {
    color: none;
    background-color: none;
  }
  :hover {
    color: var(--clr-primary-1);
  }
`;

export default AmountButton;
