import { listFilms, FilmsReponse } from "@/services/films";
import apiClient from "@/services/api";

jest.mock("@/services/api", () => ({
  get: jest.fn(),
}));

describe("listFilms function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  it("should return films data on a successful API call", async () => {
    const mockResponse: FilmsReponse = {
      result: [
        {
          _id: "1",
          uid: "123",
          properties: {
            title: "A New Hope",
            episode_id: 4,
            director: "George Lucas",
            release_date: "1977-05-25",
            created: "",
            edited: "",
            producer: "",
            opening_crawl: "",
            url: "",
          },
        },
      ],
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const result = await listFilms();

    expect(result).toEqual(mockResponse);
    expect(result.result.length).toBe(1);
    expect(result.result[0].properties.title).toBe("A New Hope");
    expect(result.result[0].properties.director).toBe("George Lucas");
  });

  it("should return an empty array if no films are found", async () => {
    const mockResponse: FilmsReponse = {
      result: [],
    };

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockResponse });

    const result = await listFilms();

    expect(result.result.length).toBe(0);
  });

  it("should throw an error if the API request fails", async () => {
    (apiClient.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    try {
      await listFilms();
    } catch (error) {
      expect(error).toEqual(new Error("Failed to fetch films"));
    }
  });
});
