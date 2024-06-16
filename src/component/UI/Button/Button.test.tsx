import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Button tests", () => {
  test("renders Button with children/text properly", () => {
    render(<Button>Login</Button>);
    const buttonElement = screen.getByText(/Login/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("Button click functionality works properly", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Go Back</Button>);
    const buttonElement = screen.getByText(/Go Back/i);
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Button props works properly:e.g disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled={true} onClick={handleClick}>
        Go Back
      </Button>
    );
    const buttonElement = screen.getByText(/Go Back/i);
    buttonElement.click();
    buttonElement.click();
    buttonElement.click();
    expect(handleClick).not.toHaveBeenCalled();
  });
});
