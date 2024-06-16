import { getIdFromUrl } from "./formatData.helper";

describe("getIdFromUrl", () => {
  const splitWord = "people";
  it("should return the ID when the URL is valid", () => {
    const url = "https://swapi.dev/api/people/1/";
    const result = getIdFromUrl(splitWord, url);
    expect(result).toBe("1");
  });

  it("should return an empty string when the URL is undefined", () => {
    const result = getIdFromUrl(splitWord);
    expect(result).toBe("");
  });

  it("should return an empty string when the split word is not found in the URL", () => {
    const url = "https://swapi.dev/api/planets/1/";
    const result = getIdFromUrl(splitWord, url);
    expect(result).toBe("");
  });
});
