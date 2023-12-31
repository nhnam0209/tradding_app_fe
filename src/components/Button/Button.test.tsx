import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";

test("render button with title", () => {
  render(
    <Button backgroundColor={"red"} callback={jest.fn} title={"Toggle"} />
  );
  const btnElement = screen.getByText(/Toggle/i);
  expect(btnElement).toBeInTheDocument();
});
