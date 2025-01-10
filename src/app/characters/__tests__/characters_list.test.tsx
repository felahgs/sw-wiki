import { render, screen, waitFor } from "@testing-library/react";
import CharactersList from "../characters_list";
import { CharactersResponse } from "@/services/characters";
import { characterList } from "@/utils/mocks";

// Mocked characters data
const mockCharactersResponse: CharactersResponse = {
  results: characterList,
  total_pages: 5,
  total_records: 2,
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("CharactersList", () => {
  const mockCharactersPromise = jest
    .fn()
    .mockResolvedValue(mockCharactersResponse);

  it("renders characters and pagination correctly", async () => {
    render(
      await CharactersList({
        charactersPromise: mockCharactersPromise,
        page: 1,
      }),
    );

    expect(screen.queryByText("Loading...")).toBeNull();

    expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
    expect(await screen.findByText("Darth Vader")).toBeInTheDocument();
  });

  it("calls charactersPromise with the correct page number", async () => {
    render(
      await CharactersList({
        charactersPromise: mockCharactersPromise,
        page: 2,
      }),
    );

    await waitFor(() => expect(mockCharactersPromise).toHaveBeenCalledWith(2));
  });

  it("calls charactersPromise with the first page when the prop is not provided", async () => {
    render(
      await CharactersList({
        charactersPromise: mockCharactersPromise,
      }),
    );

    await waitFor(() => expect(mockCharactersPromise).toHaveBeenCalledWith(1));
  });

  it("displays no characters if the response has no results", async () => {
    const emptyResponse: CharactersResponse = {
      results: [],
      total_pages: 1,
      total_records: 0,
    };
    const emptyMock = jest.fn().mockResolvedValue(emptyResponse);

    render(
      await CharactersList({
        charactersPromise: emptyMock,
        page: 1,
      }),
    );

    await waitFor(() =>
      expect(screen.queryByText("Luke Skywalker")).not.toBeInTheDocument(),
    );
  });
});
