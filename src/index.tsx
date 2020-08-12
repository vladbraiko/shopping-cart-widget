import * as React from "react";
import { WidgetTitle } from "./components/widgetTitle/WidgetTitle";
import { PriceList } from "./components/prices/PriceList";
import { Widget, Container } from "./styledComponents";

export type Option = {
  weight: string;
  price: string;
};

interface AppProps {
  prices: Option[];
  onSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
}

const TestApp = ({ prices, onSubmit }: AppProps) => {
  return (
    <Widget>
      <Container>
        <WidgetTitle />
        <PriceList prices={prices} onSubmit={onSubmit} />
      </Container>
    </Widget>
  );
};

export default TestApp;
