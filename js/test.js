const opentdb = require("opentdb-api");

const test = {
  amount: 10,
  category: "any",
  difficulty: "medium",
  type: "multiple",
};

opentdb.getTrivia(test).then((result) => {
  console.log(result);
});
