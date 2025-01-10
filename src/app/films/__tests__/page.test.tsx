import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import FilmsPage from "../page";
import { listFilms } from "@/services/films";
import { films } from "@/utils/mocks";

jest.mock("@/services/films", () => ({
  listFilms: jest.fn(),
}));

describe("FilmsPage", () => {
  it("should render films correctly", async () => {
    (listFilms as jest.Mock).mockResolvedValue(films);

    render(await FilmsPage());

    await waitFor(() => screen.getByText("The Empire Strikes Back"));

    expect(screen.getByText("The Empire Strikes Back")).toBeInTheDocument();
    expect(screen.getByText("Opening crawl for Film 1")).toBeInTheDocument();
    expect(screen.getByText("A New Hope")).toBeInTheDocument();
    expect(screen.getByText("Opening crawl for Film 2")).toBeInTheDocument();
  });

  it("should handle empty films list", async () => {
    (listFilms as jest.Mock).mockResolvedValue({ result: [] });

    render(await FilmsPage());

    expect(
      screen.queryByText("The Empire Strikes Back"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("A New Hope")).not.toBeInTheDocument();
  });
});
