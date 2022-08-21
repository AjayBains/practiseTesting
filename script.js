const googleDataBase = [
  "dogs.com",
  "animalparty.com",
  "imaginescience.com",
  "studiousnerds.com",
  "bigdogs.com",
  "furiousdogs.com",
  "hungrydogs.com",
  "cutedogs.com",
];

const googleSearch = (searchInput,db) => {
  const matches = db.filter((website) =>
    website.includes(searchInput)
  );

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};
console.log(googleSearch("dog",googleDataBase));
module.exports = googleSearch;
