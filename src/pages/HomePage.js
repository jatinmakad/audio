import React from 'react';
import styled from 'styled-components';
import Hero from "../components/Hero";
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
const HomePage = () => {
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  margin-bottom: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 6rem;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10.5rem;
    margin-bottom: 12.5rem;
  }
`;

  return (
    <main>
      <Hero />
      <Container>
        <Categories />
        <FeaturedProducts />
        <AboutUs/>
      </Container>
    </main>
  );
};


export default HomePage;
