import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { scrollToTop, toAbsolute } from '../utils/heleprs';

const ProductProposition = ({ name, id, image }) => {
  const width = window.innerWidth;
  const { mobile, tablet, desktop } = image;
  return (
    <Wrapper>
      <img
        src={width >= 1280 ? toAbsolute(desktop) : width >= 768 ? toAbsolute(tablet) : toAbsolute(mobile)}
        alt=''
      />
      <h5>{name}</h5>
      <Link to={`/product/${id}`} className='btn-1' onClick={scrollToTop}>
        see product
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h5 {
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    margin-bottom: 2rem;
    border-radius: var(--radius);
  }
`;

export default ProductProposition;
