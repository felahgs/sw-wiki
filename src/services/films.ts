import apiClient from "@/services/api";

export interface FilmsReponse {
  message?: string;
  result: Film[];
}

interface Film {
  _id: string;
  uid: string;
  properties: FilmProperties;
  description?: string;
}

interface FilmProperties {
  characters?: string[];
  planets?: string[];
  starships?: string[];
  vehicles?: string[];
  species?: string[];
  created?: string;
  edited?: string;
  producer?: string;
  title?: string;
  episode_id?: number;
  director?: string;
  release_date?: string;
  opening_crawl?: string;
  url?: string;
}

export async function listFilms(): Promise<FilmsReponse> {
  try {
    const response = await apiClient.get("/films");
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch films", error as Error);
  }
}
