import { Character } from "../contants/types.constant";

export const getIdFromUrl = (splitWord: string, url?: string): string => {
  if (!url) {
    return "";
  }
  const arraySplit = url.split(`/${splitWord}/`);
  if (arraySplit.length !== 2) {
    return "";
  }
  return arraySplit[1].replace("/", "").toString();
};

export const formatCharacter = (data: Partial<Character>): Character => {
  const charId = getIdFromUrl("people", data.url);
  const planetId = getIdFromUrl("planets", data.homeworld);
  return {
    id: charId,
    planetId,
    height: data?.height || "",
    name: data?.name || "",
    gender: data?.gender || "N/A",
    mass: data?.mass || "",
    hair_color: data?.hair_color || "",
    skin_color: data?.skin_color || "",
    eye_color: data?.eye_color || "",
    birth_year: data?.birth_year || "",
    homeworld: data?.homeworld || "",
    created: data?.created || "",
    edited: data?.edited || "",
    url: data?.url || "",
    films: data?.films || [],
    species: data?.species || [],
    vehicles: data?.vehicles || [],
    starships: data?.starships || [],
  };
};
