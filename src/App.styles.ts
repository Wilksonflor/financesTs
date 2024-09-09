import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  background-color: darkblue;
  height: 150px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  color: #fff;
  padding-top: 30px;
`;

export const Body = styled.div`
  margin: 0 auto;
  max-width: 980px;
  margin-bottom: 50px;
`;

export const BtnModal = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 10px;

  background-color: rgba(0, 0, 255, 0.808);
  color: #fff;
  padding: 10px;
  margin-top: 20px;
  margin-left: auto;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
`;
