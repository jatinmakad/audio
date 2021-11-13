import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleAmount } from '../slice/addCartSlice';

const CartAmountBtn = ({ value, id }) => {
    const dispatch = useDispatch()

    const toogle = (id,value) => {
      dispatch(toggleAmount({id,value}))
    }
  return (
    <AmountBtn>
      <div onClick={() => toogle(id, 'dec')}>-</div>
      <div className='amount'>{value}</div>
      <div onClick={() => toogle(id, 'inc')}>+</div>
    </AmountBtn>
  );
};

const AmountBtn = styled.button`
  background-color: var(--clr-base);
  display: flex;
  text-align: center;
  div {
    font-size: var(--fs-mili);
    opacity: 0.25;
    font-weight: bold;
    width: 2rem;
    line-height: 2rem;
  }
  .amount {
    opacity: 1;
  }
`;

export default CartAmountBtn;
