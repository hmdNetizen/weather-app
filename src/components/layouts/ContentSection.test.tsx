/* eslint-env jest */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContentSection from "./ContentSection";
import Root from "../../root/Root";

describe("Selected state of temperature buttons", () => {
  let fahrenheitButton: HTMLElement;
  let celciusButton: HTMLElement;

  beforeEach(() => {
    render(
      <Root>
        <ContentSection />
      </Root>
    );
    fahrenheitButton = screen.getByTestId("F");
    celciusButton = screen.getByTestId("C");
  });

  it("is on Celcius at load time", () => {
    // assert
    expect(celciusButton).toHaveClass("section__temperature__button--selected");
    expect(fahrenheitButton).toHaveClass(
      "section__temperature__button--unselected"
    );
  });

  it("switches to Fahrenheit if the F button is clicked", () => {
    fireEvent.click(fahrenheitButton);
    expect(fahrenheitButton).toHaveClass(
      "section__temperature__button--selected"
    );
    expect(celciusButton).toHaveClass(
      "section__temperature__button--unselected"
    );
  });

  it("switches back to Celcius if the C buton is clicked", () => {
    // setup
    fireEvent.click(celciusButton);
    expect(fahrenheitButton).toHaveClass(
      "section__temperature__button--unselected"
    );
    expect(celciusButton).toHaveClass("section__temperature__button--selected");
  });
});
