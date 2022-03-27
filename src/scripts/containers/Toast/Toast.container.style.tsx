import styled from 'styled-components'

export default {
  Container: styled.div`
  position : fixed;
  margin: 70px auto 10px;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  z-index: 9999;
  &.toast-enter {
    transform: translateY(-500%);
    opacity: 0;

  }

  &.toast-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: tranform ease-in-out 0.3s, opacity ease-in-out 0.3s;
  }

  &.toast-exit {
    opacity: 1;
    transform: translateY(0);

  }

  &.toast-exit-active {
    opacity: 0;
    transform: translateY(-500%));
    
  }
  `,
  Contents: styled.div`
    display: inline-flex;
    align-items: cneter;
    background-color: lime;
    box-shadow: 0 16px 30px 0 rgba(0, 0, 0, 0.16);
  `,
}
