import apiClient from "@/services/api";

export interface QueryParams {
  limit?: number;
  page?: number;
  name?: string;
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

export interface CharactersResponse {
  message?: string;
  result?: Character[];
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

export async function listCharacters(
  queryParams?: QueryParams,
): Promise<CharactersResponse> {
  try {
    const queryString = `?page=${queryParams?.page ?? "1"}&limit=${queryParams?.limit ?? 10}&name=${queryParams?.name || ""}`;
    const response = await apiClient.get(`/people${queryString}`);

    const { result, results, ...rest } = response.data;

    const searcheResult =
      result &&
      result.map((character: Character) => ({
        uid: character.uid,
        name: character.properties.name,
        url: character.properties.url,
      }));

    const formattedResponse = {
      results: result ? searcheResult : results,
      ...rest,
    };

    return formattedResponse;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch characters", error as Error);
  }
}
