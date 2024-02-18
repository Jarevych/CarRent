import styled from "styled-components";

export const StyledContainer = styled.div`
max-width: 1440px;
margin: 0 auto;
/* padding: 0 128px; */
/* .catalog-item{
    width: 274px;
    height: 426px;

} */
.lear-btn {
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
    color: #FFF;
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
    color: #FFF;
  }

  .mileage-item{
    display: flex;
    align-items: end;
  }
label {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    color: rgba(138, 138, 137, 1);
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
.filter {
    
    display: flex;
    justify-content: center;
    align-items: end;
    margin-top: 150px;
    margin-bottom: 50px;
    height: 74px;
    gap: 18px;
}
.input-from {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
}
.input-to {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
  .cars-list {
    width: 1184px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* justify-content: space-between; */
    /* font-family: Manrope; */
    font-size: 16px;
    /* font-weight: 500; */
  }
  .item-img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 274px;
    height: 268px;
    overflow: hidden;
    border-radius: 8px;
    /* width: 274px */
  }
  .car-item {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 274px;
    justify-content: center;
    align-items: center;
    width: 274px;
    height: 426px;
  }
  .car-main-data {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 12px;
    line-height: 1.5;
    font-family: Manrope;
    font-weight: 400;
    margin: 14px 0;
    color: rgba(18, 20, 23, 0.5);
    /* flex-direction: row; */
  }
  /* img {
    border-radius: 8px;
    width: 274px
} */
  p {
    display: flex;
  }
  
  .item-title {
    width: 274px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }

  .item-title-text {
    font-size: 16px;
    font-family: Manrope;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 14px;
  }
  .span-color {
    color: #3470FF;
  }
  .favor {
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: 0;
  /* z-index: 100; */
  /* fill: none; */
}

`;
