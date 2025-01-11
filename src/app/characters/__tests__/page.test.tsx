import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharactersPage from "../page";
import { CharactersResponse, listCharacters } from "@/services/characters";
import { characterList } from "@/utils/mocks";

jest.mock("@/services/characters", () => ({
  listCharacters: jest.fn(),
}));

jest.mock("../characters_list", () =>
  jest.fn(() => <div>Mocked Characters List</div>),
);

const mockCharactersResponse: CharactersResponse = {
  results: characterList,
  total_pages: 1,
  total_records: 2,
};

describe("CharactersPage", () => {
  it("renders correctly with default searchParams", async () => {
    (listCharacters as jest.Mock).mockResolvedValueOnce(mockCharactersResponse);

    const mockSearchParams = Promise.resolve({
      page: undefined,
      name: undefined,
    });

    render(await CharactersPage({ searchParams: mockSearchParams }));

    expect(await screen.findByText("Characters")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Search characters..."),
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Mocked Characters List"),
    ).toBeInTheDocument();
  });

  it("renders results message when name is present in searchParams", async () => {
    const mockSearchParams = Promise.resolve({ page: undefined, name: "Luke" });

    render(await CharactersPage({ searchParams: mockSearchParams }));

    expect(await screen.findByText("Showing results for")).toBeInTheDocument();
    expect(await screen.findByText('"Luke"')).toBeInTheDocument();
  });
});
