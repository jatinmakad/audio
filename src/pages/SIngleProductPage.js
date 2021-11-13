import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GoBackBtn from "../components/GoBackBtn";
import ProductDetails from "../components/ProductDetails";
import ProductGallery from "../components/ProductGallery";
import ProductsPropositions from "../components/ProductsPropositions";
import ProductDescription from "../components/ProductDescription"
import AboutUs from '../components/AboutUs';
import Categories from '../components/Categories';
import styled from 'styled-components';
import { singleProduct } from '../slice/productdSlice';
import { useDispatch, useSelector } from "react-redux";

const SingleProductPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleProduct(id))
  }, [id]);
  const data = useSelector((state) => state.product.products)
  return (
    <Main>
      <div className='container'>
        <GoBackBtn />
      </div>
      <Container className='container'>
        <ProductDetails {...data} />
        <ProductDescription {...data} />
        <ProductGallery {...data} />
        <ProductsPropositions {...data} />
        <Categories />
        <AboutUs />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  padding-top: 1rem;
  @media screen and (min-width: 768px) {
    padding-top: 2rem;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  padding-top: 1.5rem;
  padding-bottom: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 7.5rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10rem;
    padding-top: 3.5rem;
    padding-bottom: 10rem;
  }
`;

export default SingleProductPage;
