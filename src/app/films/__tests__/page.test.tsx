import { render, screen, waitFor } from "@testing-library/react";

import { listFilms } from "@/services/films";
import { films } from "@/utils/mocks";

import FilmsPage from "../page";

jest.mock("@/services/films", () => ({
  listFilms: jest.fn(),
}));

describe("FilmsPage", () => {
  it("should render films correctly", async () => {
    (listFilms as jest.Mock).mockResolvedValue(films);

    render(await FilmsPage());

    await waitFor(() => screen.getAllByText("The Empire Strikes Back"));

    expect(screen.getAllByText("The Empire Strikes Back")).toHaveLength(2);
    expect(screen.getByText("Opening crawl for Film 1")).toBeInTheDocument();
    expect(screen.getAllByText("A New Hope")).toHaveLength(2);
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
