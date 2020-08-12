import * as React from "react";
import TestApp from ".";

const Regular: React.FC = () => {
  const prices = [
    {
      weight: "500 г",
      price: "500 грн",
    },
    {
      weight: "100 г",
      price: "150 грн",
    },
    {
      weight: "50 г",
      price: "90 грн",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert("Ваше замовлення додано до кошика. Дякуємо!");
  };

  return <TestApp prices={prices} onSubmit={handleSubmit} />;
};

export { Regular };

export default {
  title: "Common/TestApp",
};
