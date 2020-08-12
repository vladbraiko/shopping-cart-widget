import * as React from "react";
import {
  StyledPriceItem,
  StyledInput,
  StyledInputContainer,
  StyledCheckRadio,
  StyledOption,
  StyledPrice,
} from "./styledComponents";

interface Props {
  orderDetails: any;
  onCheckOrderDetails: any;
  checkedWeight: string;
  totalPrice: string;
}

export const PriceItem = ({
  orderDetails,
  onCheckOrderDetails,
  checkedWeight,
  totalPrice,
}: Props) => {
  const handleChange = ({ target }) => {
    const { value, name } = target;
    onCheckOrderDetails(value, name);
  };

  return (
    <section>
      <StyledPriceItem>
        <StyledInputContainer>
          <StyledInput
            type="radio"
            name={orderDetails.price}
            value={orderDetails.weight}
            checked={checkedWeight === orderDetails.weight}
            onChange={handleChange}
          />
          <StyledCheckRadio />
          <StyledOption isChecked={totalPrice === orderDetails.price}>
            {orderDetails.weight}
          </StyledOption>
        </StyledInputContainer>
        <StyledPrice isChecked={totalPrice === orderDetails.price}>
          {orderDetails.price}
        </StyledPrice>
      </StyledPriceItem>
    </section>
  );
};
