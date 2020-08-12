import styled from "styled-components";

export const StyledPriceList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  margin-top: 17px;
`;

export const StyledPriceItem = styled.label`
  width: 267px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 19px;

  @media screen and (min-width: 768px) {
    width: 282px;
  }
`;

type LabelProps = {
  isChecked: boolean;
};

export const StyledOption = styled.span<LabelProps>`
  margin-top: 2px;
  color: ${(props) => (props.isChecked ? "#000" : "#999")};
`;

export const StyledPrice = styled.span<LabelProps>`
  margin-top: 2px;
  font-weight: ${(props) => (props.isChecked ? "bold" : "normal")};
  color: ${(props) => (props.isChecked ? "#000" : "#999")};
`;

export const StyledInputContainer = styled.div`
  display: flex;
  position: relative;
  & > ${StyledOption} {
    margin-left: 40px;
  }
`;

export const StyledCheckRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: transparent;
  border: 1px solid #6ca22c;
  border-radius: 50%;
  ::after {
    content: "";
    position: absolute;
    display: none;
    left: 7px;
    top: 7px;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    background-color: #6ca22c;
    border-radius: 50%;
  }
`;

export const StyledInput = styled.input`
  background-color: red;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  :checked ~ ${StyledCheckRadio} {
  }
  :checked ~ ${StyledCheckRadio}:after {
    display: block;
  }
`;
