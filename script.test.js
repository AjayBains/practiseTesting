const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];
it("this is a trial test", () => {
    expect("hello").toBe("hello");
  googleSearch("testtest", dbMock);
});
it("this is a test", () => {
   
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("dog", dbMock)).toEqual(["dog.com","dogpictures.com"]);
});
