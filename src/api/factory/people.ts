import { Character, Film, Planet } from "../../utils/contants/types.constant";
import { formatCharacter } from "../../utils/helpers/formatData.helper";
import { get } from "../instance";

export const fetchCharacter = async (id: string) => {
  try {
    if (!id) {
      throw new Error("No Id found");
    }

    const { data } = await get<Character>(`/people/${id}`);

    return data;
  } catch (error) {
    console.log(`fetchCharacter Error for id =${id}`, error);
    return {} as Character;
  }
};

export const fetchCharacterFilms = async (filmList: string[] = []) => {
  try {
    if (!filmList.length) {
      return [];
    }

    // fetching all the film data.
    // From the API contract, there are only 6 films. /films.
    // We could possibly fetch the entire list and filter out the films we need.
    // However, that would not be scalable as the film list can grow with time,
    // resulting to overfetch of data/poor performance. Hence this:
    const uniqueFilmUrls = Array.from(new Set(filmList));
    const filmsData = await Promise.all(
      uniqueFilmUrls?.map(async (filmUrl) => {
        const { data } = await get<Film>(filmUrl);
        return data;
      })
    );

    return filmsData;
  } catch (error) {
    console.log(`fetchCharacterFilms Error`, error);
    return [];
  }
};

export const fetchCharacterList = async () => {
  try {
    const { data } = await get<{ results: Character[] }>("/people");
    const foundData = data?.results || [];

    // Ensure result returns a valid array.
    if (!Array.isArray(foundData)) {
      throw new Error("Server Error. Please report to support");
    }

    // get all the unique planet ID from all Characters
    const uniquePlanetIds = new Set();
    const fomattedData = foundData?.map((data) => {
      const cleaned = formatCharacter(data);
      if (cleaned?.planetId) {
        uniquePlanetIds.add(cleaned?.planetId);
      }
      return cleaned;
    });

    // fetch all planet details.
    const planetsData = await Promise.all(
      Array.from(uniquePlanetIds).map(async (planetId) => {
        const { data } = await get<Planet>(`/planets/${planetId}`);
        return data;
      })
    );

    // Enrich Character object with the home planet detail matched.
    const enrichedData = fomattedData.map((eachChar) => {
      const foundPlanets = planetsData.find(
        (eachPlanet) => eachPlanet.url === eachChar.homeworld
      );
      return {
        ...eachChar,
        homePlanetData: foundPlanets,
      };
    });
    return enrichedData;
  } catch (error) {
    console.log(`fetchCharacterList Error`, error);
    return [];
  }
};
