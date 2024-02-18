import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  
  justify-content: center;
  align-items: end;

  .section {
    display: flex;
    justify-content: center;
    align-items: end;
    margin-top: 150px;
    margin-bottom: 50px;
    gap: 18px;
  }
  .filter-item {
    display: flex;
    min-width: 125px;
    height: 48px;
    width: 160px;
    border-radius: 14px;
    font-size: 18px;
    line-height: 1.12;
    border: 0;
    background-color: rgba(247, 247, 251, 1);
  }
  /* .filter {
    display: flex;
    justify-content: center;
    align-items: end;
    margin-top: 150px;
    margin-bottom: 50px;
    height: 74px;
    gap: 18px;
  } */
  .input-from {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }
  .input-to {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .search-btn {
    display: flex;
    width: 136px;
    height: 48px;
    border-radius: 12px;
    background-color: #3470ff;
    border: none;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
    color: #fff;
  }
  .search-btn:hover {
    background-color: #0b44cd;
  }
  .search-btn:focus {
    background-color: #0b44cd;
  }
`;
