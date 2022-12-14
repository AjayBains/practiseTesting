const googleSearch = require("./script");

dbMock = [
  "dog.com",
  "cheesepuff.com",
  "disney.com",
  "dogpictures.com",
  "dogduties.com",
  "dogbites.com",
];
describe("googleSearch", () => {
  it("this is a trial test", () => {
    expect("hello").toBe("hello");
    googleSearch("testtest", dbMock);
  });

  it("is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual([
      "dog.com",
      "dogpictures.com",
      "dogduties.com",
    ]);
  });
  it("is working with undefined and null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });
  it("doesnot returns more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
