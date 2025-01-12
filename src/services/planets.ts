import apiClient from "@/services/api";

export interface QueryParams {
  limit?: number;
  page?: number;
  name?: string;
}

interface Planet {
  _id: string;
  uid: string;
  properties: CharacterProperties;
  description?: string;
}

interface CharacterProperties {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
  url: string;
}

export interface PlanetsResponse {
  message?: string;
  result?: Planet[];
  results: {
    uid: string;
    name: string;
    url: string;
  }[];
  next?: string;
  previous?: string;
  total_pages: number;
  total_records: number;
}

export interface PlanetResponse {
  message?: string;
  result: Planet;
}

export async function listPlanets(
  queryParams?: QueryParams
): Promise<PlanetsResponse> {
  try {
    const queryString = `?page=${queryParams?.page ?? "1"}&limit=${queryParams?.limit ?? 10}&name=${queryParams?.name || ""}`;
    const response = await apiClient.get(`/planets${queryString}`);

    const { result, results, ...rest } = response.data;

    const searcheResult =
      result &&
      result.map((planet: Planet) => ({
        uid: planet.uid,
        name: planet.properties.name,
        url: planet.properties.url,
      }));

    const formattedResponse = {
      results: result ? searcheResult : results,
      ...rest,
    };

    return formattedResponse;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch planets", error as Error);
  }
}

export async function getPlanet(id: number | string): Promise<PlanetResponse> {
  try {
    console.log("id", id);
    const response = await apiClient.get(`/planets/${id}`);

    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch the planet", error as Error);
  }
}
