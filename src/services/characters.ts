import apiClient from "@/services/api";
import clsx from "clsx";

export interface CharactersResponse {
  message?: string;
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

export interface QueryParams {
  limit?: number;
  page?: number;
  search?: string;
}

interface Character {
  _id: string;
  uid: string;
  properties: CharacterProperties;
  description?: string;
}

interface CharacterProperties {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
}

export async function listCharacters(
  queryParams?: QueryParams,
): Promise<CharactersResponse> {
  try {
    const queryString = `?page=${queryParams?.page ?? "1"}&limit=${queryParams?.limit ?? 12}&search=${queryParams?.search}`;
    const response = await apiClient.get(`/people${queryString}`);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch characters", error as Error);
  }
}
