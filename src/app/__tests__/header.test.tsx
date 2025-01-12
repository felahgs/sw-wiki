import { render, screen } from "@testing-library/react";
import LayoutHeader from "../header";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("LayoutHeader", () => {
  it("should render the navigation with the correct active link based on pathname", () => {
    (usePathname as jest.Mock).mockReturnValue("/films");

    render(<LayoutHeader />);

    expect(screen.getByRole("link", { name: /Films/i })).toHaveClass("active");
    expect(screen.getByRole("link", { name: /Characters/i })).not.toHaveClass(
      "active"
    );
    expect(screen.getByRole("link", { name: /Home/i })).not.toHaveClass(
      "active"
    );
  });

  it("should highlight the correct active link when pathname is '/characters'", () => {
    (usePathname as jest.Mock).mockReturnValue("/characters");

    render(<LayoutHeader />);

    expect(screen.getByRole("link", { name: /Characters/i })).toHaveClass(
      "active"
    );
    expect(screen.getByRole("link", { name: /Films/i })).not.toHaveClass(
      "active"
    );
    expect(screen.getByRole("link", { name: /Home/i })).not.toHaveClass(
      "active"
    );
  });

  it("should highlight the 'Home' link when pathname is '/'", () => {
    (usePathname as jest.Mock).mockReturnValue("/");

    render(<LayoutHeader />);

    expect(screen.getByRole("link", { name: /Home/i })).toHaveClass("active");
    expect(screen.getByRole("link", { name: /Films/i })).not.toHaveClass(
      "active"
    );
    expect(screen.getByRole("link", { name: /Characters/i })).not.toHaveClass(
      "active"
    );
  });
});
