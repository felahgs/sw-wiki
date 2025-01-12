import { render, screen } from "@testing-library/react";
import Error from "../error";
import "@testing-library/jest-dom";

describe("Error Component", () => {
  it("renders the error page", () => {
    render(<Error />);

    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We’re sorry, but the page you’re looking for encountered an error."
      )
    ).toBeInTheDocument();
  });
});
