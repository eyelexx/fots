import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  padding: 1em;
`

export const CardImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%) brightness(75%);

  width: 20em;
  height: 20em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8em;
  padding: 1em;
  cursor: pointer;

  h2,
  p {
    opacity: 0%;
  }

  &:hover {
    justify-content: center;
    gap: 1em;
    filter: none;
    transition: 1s;

    h2,
    p {
      opacity: 100%;
      transition: 1s;
    }
  }
`

export const CardLock = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%) brightness(75%);

  width: 20em;
  height: 20em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8em;
  padding: 1em;
  cursor: not-allowed;

  h2,
  p {
    opacity: 0%;
  }

  &:hover {
    filter: grayscale(100%) brightness(50%);
    transition: 1s;
    justify-content: center;
    gap: 1em;

    h2,
    p {
      opacity: 100%;
      transition: 1s;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      height: 16px;
      width: 16px;
      cursor: pointer;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 1080;
    height: 480px;
  }
`
