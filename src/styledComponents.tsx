import styled from "styled-components";

export const Widget = styled.div`
  width: 320px;
  height: 277px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  margin: 0 auto;
  padding: 24px;

  @media screen and (min-width: 768px) {
    width: 335px;
  }
`;

export const Container = styled.div`
  width: 282px;
  margin: 0 auto;
`;
