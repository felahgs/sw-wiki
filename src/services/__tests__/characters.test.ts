import {
  listCharacters,
  CharactersResponse,
  QueryParams,
} from "@/services/characters";
import apiClient from "@/services/api";
import { characterList } from "@/utils/mocks";

jest.mock("@/services/api", () => ({
  get: jest.fn(),
}));

describe("listCharacters function", () => {
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
      search: "nonexistent",
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
