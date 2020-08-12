import * as React from "react";
import { AddButtonIcon } from "./AddButtonIcon";
import { StyledAddButton, StyledContainer } from "./styledButton";

interface Props {
  totalPrice: string;
}

export const AddButton = ({ totalPrice }: Props) => {
  return (
    <StyledContainer>
      <span>{totalPrice}</span>
      <StyledAddButton type="submit">
        <AddButtonIcon /> До кошика
      </StyledAddButton>
    </StyledContainer>
  );
};
