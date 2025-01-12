import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Link from "./CustomLink";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

describe("Link Component", () => {
  it("renders children correctly", () => {
    render(<Link href="/test">Click me</Link>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies the correct classes based on props", () => {
    render(
      <Link href="/test" className="custom-class" active>
        Click me
      </Link>
    );

    const link = screen.getByText("Click me");
    expect(link).toHaveClass("hover:underline");
    expect(link).toHaveClass("custom-class");
    expect(link).toHaveClass("text-tertiary");
  });

  it("does not apply the active class if active is not passed", () => {
    render(<Link href="/test">Click me</Link>);
    const link = screen.getByText("Click me");
    expect(link).not.toHaveClass("text-tertiary");
  });

  it("renders a NextLink component with the correct href attribute", () => {
    const { container } = render(<Link href="/test">Click me</Link>);
    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/test");
  });
});
