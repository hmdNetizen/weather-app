import { screen, render, fireEvent } from "@testing-library/react";
import Root from "../../root/Root";
import AsideContent from "./Aside";

describe("location button", () => {
  let asideElement: HTMLElement;

  const mockFunction = jest.fn();

  // jest.mock("axios", () => ({
  //   __esModule: true,
  //   default: {
  //     get: () => ({
  //       data: {
  //         consolidated_weather: [
  //           {
  //             weather_state_abbr: "hr",
  //             the_temp: "30",
  //             weather_state_name: "Heavy Rain",
  //             applicable_date: "2021-09-16",
  //           },
  //         ],
  //         title: "Lagos",
  //       },
  //     }),
  //   },
  // }));

  beforeEach(() => {
    render(
      <Root>
        <AsideContent openSearch={false} setOpenSearch={mockFunction} />
      </Root>
    );
  });

  // it("should test that the aside content is in the document", () => {
  //   asideElement = screen.getByTestId("aside");

  //   expect(asideElement).toHaveClass("aside__content");
  // });

  // it("should should the loading spinner when the location button is clicked", () => {
  //   const buttonElement = screen.getByTestId("location-btn");
  //   fireEvent.click(buttonElement)
  // })
});
