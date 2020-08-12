import * as React from "react";
import { PriceItem } from "./PriceItem";
import { AddButton } from "../addButton/AddButton";
import { StyledPriceList, StyledListItem } from "./styledComponents";

type Option = {
  weight: string;
  price: string;
};

interface PriceListProps {
  prices: Option[];
  onSubmit: any;
}

export class PriceList extends React.Component<PriceListProps> {
  state = {
    checkedWeight: "",
    totalPrice: "",
  };

  checkOrderDetails = (weight: string, price: string) => {
    return this.setState({ checkedWeight: weight, totalPrice: price });
  };

  confirmTheOrder = (e) => {
    e.preventDefault();
    if (this.state.totalPrice) this.props.onSubmit();
  };

  render() {
    const { prices } = this.props;
    const { checkedWeight, totalPrice } = this.state;
    return (
      <form onSubmit={this.confirmTheOrder}>
        <StyledPriceList>
          {prices.map((item) => (
            <StyledListItem key={item.price}>
              <PriceItem
                orderDetails={item}
                onCheckOrderDetails={this.checkOrderDetails}
                checkedWeight={checkedWeight}
                totalPrice={totalPrice}
              />
            </StyledListItem>
          ))}
        </StyledPriceList>
        <AddButton totalPrice={totalPrice} />
      </form>
    );
  }
}
