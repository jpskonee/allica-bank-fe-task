export type Planet = {
  name: string;
  [others: string]: string;
};
export type Film = {
  title: string;
  director: string;
  producer: string;
  release_date: string;
  [others: string]: string;
};

export type Character = {
  id: string;
  name: string;
  planetId?: string;
  url: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  homePlanetData?: Planet;
};
