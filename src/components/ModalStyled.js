import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    position: fixed;
    z-index: 10;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(18, 20, 23, 0.5);
`

export const ModalContainer = styled.div`
   position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 40px;
    border-radius: 24px;
    background-color: #FFF;
    max-width: 461px;
    width: 100vw;
    max-height: 752px;
    height: 100vh;
    overflow: auto;
    .close-btn {
        position: absolute;
        z-index: 2000;
        top: 20px;
        right: 20px;
        width: 12px;
        height: 12px;
        background-color: transparent;
        border: none;
    }
    .desc{
       font-size: 14px;
       line-height: 1.42;
       font-weight: 400;
    }
    .title{
       font-size: 14px;
       line-height: 1.42;
       font-weight: 500;
    }
    .text{
        display: flex;
       font-size: 12px;
       line-height: 1.42;
       font-weight: 400;
       color: rgba(18, 20, 23, 0.5);
;
    }
    .span-color {
    color: #3470ff;
  }
    .line-item {
        display: flex;

    }
    .btn {
        color: white;
    background-color: rgb(52, 112, 255);
    border-radius: 12px;
    border: none;
    width: 168px;
    height: 44px;
    transition: all 0.6s ease 0s;
    }
`
