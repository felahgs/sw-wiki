import {
  listCharacters,
  CharactersResponse,
  QueryParams,
  CharacterResponse,
  getCharacter,
} from "@/services/characters";
import apiClient from "@/services/api";
import { character, characterList } from "@/utils/mocks";

jest.mock("@/services/api", () => ({
  get: jest.fn(),
}));

describe("listCharacters", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  it("should return characters data on a successful API call", async () => {
    const mockResponse: CharactersResponse = {
      results: characterList,
      total_pages: 1,
      total_records: 2,
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const queryParams: QueryParams = { page: 1, limit: 12 };
    const result = await listCharacters(queryParams);

    expect(result).toEqual(mockResponse);
    expect(result.results.length).toBe(2);
    expect(result.results[0].name).toBe("Luke Skywalker");
  });

  it("should return a filtered and ordered character list when using the name filter", async () => {
    const mockResponse: CharactersResponse = {
      result: [character],
      results: [],
      total_pages: 1,
      total_records: 1,
    };

    const expectedResponse: CharactersResponse = {
      results: [characterList[0]],
      total_pages: 1,
      total_records: 1,
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const queryParams: QueryParams = { page: 1, limit: 12 };
    const result = await listCharacters(queryParams);

    expect(result).toEqual(expectedResponse);
    expect(result.results.length).toBe(1);
    expect(result.results[0].name).toBe("Luke Skywalker");
  });

  it("should return an empty array if no characters are found", async () => {
    const mockResponse: CharactersResponse = {
      results: [],
      total_pages: 0,
      total_records: 0,
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const queryParams: QueryParams = {
      page: 1,
      limit: 12,
      name: "nonexistent",
    };
    const result = await listCharacters(queryParams);

    expect(result.results.length).toBe(0);
    expect(result.total_records).toBe(0);
  });

  it("should throw an error if the API request fails", async () => {
    (apiClient.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    try {
      await listCharacters();
    } catch (error) {
      expect(error).toEqual(new Error("Failed to fetch characters"));
    }
  });
});

describe("getCharacter", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  it("should return one character data on a successful API call", async () => {
    const mockResponse: CharacterResponse = {
      result: character,
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const result = await getCharacter(1);

    expect(result).toEqual(mockResponse);
    expect(result.result.properties.name).toBe("Luke Skywalker");
    expect(result.result.properties.hair_color).toBe("blond");
  });

  it("should throw an error if the API request fails", async () => {
    (apiClient.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    try {
      await getCharacter(1);
    } catch (error) {
      expect(error).toEqual(new Error("Failed to fetch the character"));
    }
  });
});
