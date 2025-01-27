import { render, screen } from "@testing-library/react";
import Loading from "../loading";
import "@testing-library/jest-dom";

describe("Loading Component", () => {
  it("renders the Loader with the status role", () => {
    render(<Loading />);

    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
  });
});
