import { render, screen, waitFor } from "@testing-library/react";
import CharactersPage from "@/app/characters/[id]/page";
import { getCharacter } from "@/services/characters";
import axios from "axios";
import { character, planet } from "@/utils/mocks";

jest.mock("@/services/characters");
jest.mock("axios");

const mockedGetCharacter = getCharacter as jest.Mock;
const mockedAxios = axios.get as jest.Mock;

describe("CharactersPage", () => {
  const mockParams = { id: 1 };
  const mockCharacterData = {
    result: character,
  };

  const mockPlanetData = {
    data: {
      result: planet,
    },
  };

  beforeEach(() => {
    mockedGetCharacter.mockResolvedValue(mockCharacterData);
    mockedAxios.mockResolvedValue(mockPlanetData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders character details labels correctly", async () => {
    render(await CharactersPage({ params: Promise.resolve(mockParams) }));

    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });

    expect(screen.getByText("Height:")).toBeInTheDocument();
    expect(screen.getByText("Mass:")).toBeInTheDocument();
    expect(screen.getByText("Hair Color:")).toBeInTheDocument();
    expect(screen.getByText("Skin Color:")).toBeInTheDocument();
    expect(screen.getByText("Eye Color:")).toBeInTheDocument();
    expect(screen.getByText("Birth Year:")).toBeInTheDocument();
    expect(screen.getByText("Gender:")).toBeInTheDocument();
    expect(screen.getByText("Homeworld:")).toBeInTheDocument();
  });

  it("renders character details values correctly", async () => {
    render(await CharactersPage({ params: Promise.resolve(mockParams) }));

    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });

    expect(screen.getByText("172 cm")).toBeInTheDocument();
    expect(screen.getByText("77 kg")).toBeInTheDocument();
    expect(screen.getByText("blond")).toBeInTheDocument();
    expect(screen.getByText("fair")).toBeInTheDocument();
    expect(screen.getByText("blue")).toBeInTheDocument();
    expect(screen.getByText("19BBY")).toBeInTheDocument();
    expect(screen.getByText("male")).toBeInTheDocument();
    expect(screen.getByText("Tatooine")).toBeInTheDocument();
  });

  it("handles API errors gracefully", async () => {
    mockedAxios.mockRejectedValueOnce(new Error("Network Error"));

    render(await CharactersPage({ params: Promise.resolve(mockParams) }));

    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });

    expect(screen.getByText("Unknown")).toBeInTheDocument();
  });

  it("renders description when available", async () => {
    render(await CharactersPage({ params: Promise.resolve(mockParams) }));

    await waitFor(() => {
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    expect(
      screen.getByText("A person within the Star Wars universe"),
    ).toBeInTheDocument();
  });

  it("renders go back button with correct href", async () => {
    render(await CharactersPage({ params: Promise.resolve({ id: 1 }) }));

    const goBackButton = screen.getByRole("link", { name: /go back/i });
    expect(goBackButton).toBeInTheDocument();
    expect(goBackButton).toHaveAttribute("href", "/characters");
  });
});
