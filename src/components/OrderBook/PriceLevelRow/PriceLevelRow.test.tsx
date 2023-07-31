import React from "react";
import { render, screen } from "@testing-library/react";
import PriceLevelRow from ".";

test("render price level low properly - not reversed", () => {
  render(
    <PriceLevelRow
      price={"1000"}
      reversedFieldsOrder={false}
      size={"500"}
      total={"50000"}
      windowWidth={800}
    />
  );
  const priceElement = screen.getByTestId("price-level-row");
  // eslint-disable-next-line testing-library/no-node-access
  const spanElements = priceElement.querySelectorAll("span");
  expect(spanElements[2]).toHaveClass("price");
});

test("renders price level row properly - reversed", () => {
  render(
    <PriceLevelRow
      price={"1000"}
      reversedFieldsOrder={true}
      size={"500"}
      total={"50000"}
      windowWidth={800}
    />
  );
  const priceElement = screen.getByTestId("price-level-row");
  // eslint-disable-next-line testing-library/no-node-access
  const spanElements = priceElement.querySelectorAll("span");
  expect(spanElements[0]).toHaveClass("price");
});
