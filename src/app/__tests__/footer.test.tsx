import { render, screen } from "@testing-library/react";
import LayoutFooter from "../footer";

describe("LayoutFooter", () => {
  it("should render the footer with all the required content", () => {
    render(<LayoutFooter />);

    expect(
      screen.getByText(
        /Star Wars and all related names, images, and characters are copyright/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/This is a fan-made application and is not affiliated/i)
    ).toBeInTheDocument();

    const swapiLink = screen.getByRole("link", {
      name: /Star Wars API \(SWAPI\)/i,
    });
    expect(swapiLink).toHaveAttribute("href", "https://swapi.tech/");
    expect(swapiLink).toHaveAttribute("target", "_blank");

    const githubLink = screen.getByRole("link", { name: /Felipe Souza/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/felahgs/");
    expect(githubLink).toHaveAttribute("target", "_blank");

    const year = new Date().getFullYear().toString();
    expect(
      screen.getByText(`© ${year} Galaxy Wiki. All rights reserved.`)
    ).toBeInTheDocument();
  });
});
