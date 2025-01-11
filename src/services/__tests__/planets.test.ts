import {
  getPlanet,
  listPlanets,
  PlanetResponse,
  PlanetsResponse,
  QueryParams,
} from "@/services/planets";
import apiClient from "@/services/api";
import { planet, planetList } from "@/utils/mocks";

jest.mock("@/services/api", () => ({
  get: jest.fn(),
}));

describe("listPlanets", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  it("should return planets data on a successful API call", async () => {
    const mockResponse = {
      results: planetList,
      total_pages: 1,
      total_records: 2,
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const result = await listPlanets();

    expect(result).toEqual(mockResponse);
    expect(result.results.length).toBe(2);
    expect(result.results[0].name).toBe("Tatooine");
  });

  it("should return a filtered and ordered planets list when using the name filter", async () => {
    const mockResponse: PlanetsResponse = {
      result: [planet],
      results: [],
      total_pages: 1,
      total_records: 1,
    };

    const expectedResponse: PlanetsResponse = {
      results: [planetList[0]],
      total_pages: 1,
      total_records: 1,
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const queryParams: QueryParams = { page: 1, limit: 12 };
    const result = await listPlanets(queryParams);

    expect(result).toEqual(expectedResponse);
    expect(result.results.length).toBe(1);
    expect(result.results[0].name).toBe("Tatooine");
  });

  it("should return an empty results array if no planets are found", async () => {
    const mockResponse: PlanetsResponse = {
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
    const result = await listPlanets(queryParams);

    expect(result.results.length).toBe(0);
    expect(result.total_records).toBe(0);
  });

  it("should throw an error if the API request fails", async () => {
    (apiClient.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    await expect(listPlanets({ page: 1 })).rejects.toThrow(
      "Failed to fetch planets",
    );
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
    const mockResponse: PlanetResponse = {
      result: planet,
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const result = await getPlanet(1);

    expect(result).toEqual(mockResponse);
    expect(result.result.properties.name).toBe("Tatooine");
    expect(result.result.properties.terrain).toBe("desert");
  });

  it("should throw an error if the API request fails", async () => {
    (apiClient.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    try {
      await getPlanet(1);
    } catch (error) {
      expect(error).toEqual(new Error("Failed to fetch the planet"));
    }
  });
});
