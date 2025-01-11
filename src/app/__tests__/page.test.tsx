import { render, screen } from "@testing-library/react";
import HomePage from "../page";
import "@testing-library/jest-dom";

describe("HomePage Component", () => {
  test("renders the home page correctly", async () => {
    render(await HomePage());

    expect(screen.getByText(/Welcome to the Galaxy Wiki/i)).toBeInTheDocument();

    expect(
      screen.getByText(
        /Dive into a galaxy far, far away and discover about your favorite films and characters./i,
      ),
    ).toBeInTheDocument();

    const exploreFilmsLink = screen.getByRole("link", {
      name: /Explore Films/i,
    });
    expect(exploreFilmsLink).toBeInTheDocument();
    expect(exploreFilmsLink).toHaveAttribute("href", "/films");

    const viewCharactersLink = screen.getByRole("link", {
      name: /View Characters/i,
    });
    expect(viewCharactersLink).toBeInTheDocument();
    expect(viewCharactersLink).toHaveAttribute("href", "/characters");

    expect(exploreFilmsLink).toHaveClass("bg-blue-500");
    expect(viewCharactersLink).toHaveClass("bg-green-500");
  });
});
