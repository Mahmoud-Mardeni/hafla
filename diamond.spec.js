const { printDiamond } = require("./diamond");

test("Print diamond with A as an input", async () => {
  expect(printDiamond("A")).toStrictEqual("A");
});

test("Print diamond with B as an input", async () => {
  expect(printDiamond("B")).toStrictEqual(" A\nB B\n A");
});
