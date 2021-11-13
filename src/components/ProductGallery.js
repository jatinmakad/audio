import React from 'react';
import styled from 'styled-components';
import { toAbsolute } from '../utils/heleprs';

const ProductGallery = ({ gallery = {} }) => {
  const { first = {}, second = {}, third = {} } = gallery;
  const width = window.innerWidth;
  return (
    <Wrapper>
      <SmallImages>
        <img
          src={
            width >= 1280
              ? toAbsolute(first.desktop)
              : width >= 768
              ? toAbsolute(first.tablet)
              : toAbsolute(first.mobile)
          }
          alt=''
        />
        <img
          src={
            width >= 1280
            ? toAbsolute(second.desktop)
            : width >= 768
            ? toAbsolute(second.tablet)
            : toAbsolute(second.mobile)
          }
          alt=''
        />
      </SmallImages>
      <BigImage>
        <img
          src={
            width >= 1280
            ? toAbsolute(third.desktop)
            : width >= 768
            ? toAbsolute(third.tablet)
            : toAbsolute(third.mobile)
          }
          alt=''
        />
      </BigImage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    gap: 1.875rem;
  }
`;
const SmallImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
  }
  @media screen and (min-width: 1280px) {
    gap: 1.875rem;
  }
`;
const BigImage = styled.div`
  img {
    height: 100%;
    width: 100%;
    border-radius: var(--radius);
  }
`;

export default ProductGallery;
