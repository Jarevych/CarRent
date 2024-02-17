import styled from 'styled-components';
import bgImg from '../assets/front-part.jpg';

export const StyledContainer = styled.div`
  max-width: 1440px;
  height: 840px;
  margin: 0 auto;
  position: relative;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(71, 71, 71, 0.7)
    ),
    url(${bgImg});
  background-size: cover; /* Зменшує зображення так, щоб воно повністю покривало контейнер */
  background-position: center bottom;
  background-repeat: no-repeat;
  padding: 20px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
/* justify-content: center; */
align-items: center;
  .title {
    font-size: 56px;
    font-weight: 700;
    color: #fff;
    margin-top: 20%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .descr {
    margin-top: 100px;
    /* background: linear-gradient( rgba(255, 255, 255, 0.7), */
    /* rgba(71, 71, 71, 0.7)
      ); */
    color: #fff;
    line-height: 1.5;
    font-size: 20px;
    font-weight: 500;
  }
  .rent-btn {
    display: flex;
    width: 274px;
    height: 44px;
    border-radius: 12px;
    background-color: #3470ff;
    border: none;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
    color: #fff;
    }
    .rent-btn:hover {
    background-color: #0B44CD;
  }
  .rent-btn:focus {
    background-color: #0B44CD;
  }

  /* Link {
    background-color: #0B44CD;
  } */
`;
