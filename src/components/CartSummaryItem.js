import React from 'react';
import styled from 'styled-components';
import { formatPrice, toAbsolute } from '../utils/heleprs';

const CartSummaryItem = ({ cartImage, name, price, quantity }) => {
  return (
    <Wrapper>
      <img src={toAbsolute(cartImage)} alt='cart item image' />
      <div className='info'>
        <p className='title'>{name}</p>
        <span className='amount'>x{quantity}</span>
        <p className='price'>{formatPrice(price)}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  padding: 0.5rem 0rem 0.5rem 4rem;
  min-height: 4rem;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    height: 4rem;
    border-radius: var(--radius);
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
    font-weight: bold;
  }
  .info > * {
    flex: 1 1 50%;
  }
  .amount {
    text-align: right;
    opacity: 0.5;
  }
  .price {
    opacity: 0.5;
    font-size: var(--fs-micro);
  }
`;

export default CartSummaryItem;
