import * as React from "react";
import { TitleContainer, TitleItem } from "./styledComponents";

export const WidgetTitle = () => {
  return (
    <TitleContainer>
      <TitleItem>Тип</TitleItem>
      <TitleItem>Ціна</TitleItem>
    </TitleContainer>
  );
};
