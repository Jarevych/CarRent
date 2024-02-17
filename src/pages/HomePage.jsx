import React from 'react';
// import { StyledLayout } from './Layout.styled';
import { StyledContainer } from './HomePageStyled';
// import { Header } from 'components';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <StyledContainer>
      <h1 className="title animate__animated animate__slideInDown">
        Discover Freedom on Wheels:  <br /> Welcome to Our Car Rental Service!
      </h1>
      <div className='hero'></div>
      <NavLink className='rent-btn' to='/catalog'>Rent Car</NavLink>
      <p className="descr animate__animated animate__slideInUp">
        Our website is your reliable partner in the world of travel! A
        convenient platform for car rental that helps ensure seamless travel. We
        offer a wide selection of quality cars at affordable prices. Our
        services are tailored to your comfort and convenience - easy booking
        process, flexible conditions, and reliable customer support. Whether you
        are traveling for business or leisure, we ensure that your automotive
        adventures are unforgettable and safe."Welcome to our car rental
        service, where convenience meets affordability. Explore our wide range
        of vehicles suitable for every journey, whether it's a weekend getaway
        or a business trip. Book now and experience the freedom of the open road
        with ease!"
      </p>
    </StyledContainer>
    // </StyledLayout>
  );
};

export default HomePage;
