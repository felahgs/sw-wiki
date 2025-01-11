import { render, screen } from "@testing-library/react";
import NotFound from "../not-found";
import "@testing-library/jest-dom";

describe("NotFound Component", () => {
  it("renders the not found page", () => {
    render(<NotFound />);

    const notFound = screen.getByText("404 - Page Not Found");
    expect(notFound).toBeInTheDocument();
  });
});
