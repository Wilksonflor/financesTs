import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  label {
    display: block;
    font-weight: bold;
  }
  input,
  select {
    width: 100%;
    padding: 5px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
  }
  input[type="number"] {
    max-width: 150px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;


export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 1001;
`;


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }

    &:nth-child(2) {
      background-color: #dc3545;
      &:hover {
        background-color: #c82333;
      }
    }
  }
`;
