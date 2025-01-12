import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CharactersResponse, listCharacters } from "@/services/characters";
import { characterList } from "@/utils/mocks";

import CharactersPage from "../page";

jest.mock("@/services/characters", () => ({
  listCharacters: jest.fn(),
}));

jest.mock("../characters_list", () =>
  jest.fn(({ charactersPromise }) => (
    <div>
      <p>Mocked Characters List</p>
      <button onClick={async () => await charactersPromise(2, "search string")}>
        trigger
      </button>
    </div>
  ))
);

const mockCharactersResponse: CharactersResponse = {
  results: characterList,
  total_pages: 1,
  total_records: 2,
};

describe("CharactersPage", () => {
  it("should render correctly with default searchParams", async () => {
    (listCharacters as jest.Mock).mockResolvedValueOnce(mockCharactersResponse);

    const mockSearchParams = Promise.resolve({
      page: undefined,
      name: undefined,
    });

    render(await CharactersPage({ searchParams: mockSearchParams }));

    expect(await screen.findByText("Characters")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Search characters...")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Mocked Characters List")
    ).toBeInTheDocument();
  });

  it("should render results message when name is present in searchParams", async () => {
    const mockSearchParams = Promise.resolve({ page: undefined, name: "Luke" });

    render(await CharactersPage({ searchParams: mockSearchParams }));

    expect(await screen.findByText("Showing results for")).toBeInTheDocument();
    expect(await screen.findByText('"Luke"')).toBeInTheDocument();
  });

  it("should call listCharacters when calling fetchCharacters inside the CharactersList component", async () => {
    (listCharacters as jest.Mock).mockResolvedValueOnce(mockCharactersResponse);

    const mockSearchParams = Promise.resolve({
      page: undefined,
      name: undefined,
    });

    render(await CharactersPage({ searchParams: mockSearchParams }));

    const triggerButton = screen.getByText("trigger");
    userEvent.click(triggerButton);

    await waitFor(() => {
      expect(listCharacters).toHaveBeenCalledWith({
        page: 2,
        name: "search string",
      });
    });
  });
});
