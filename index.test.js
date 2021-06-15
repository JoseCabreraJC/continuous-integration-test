const suma = require("./index");
const assert = require("assert").strict;

describe("unit test", function () {
  it("should add 2 numbers values and return its value", () => {
    let res = suma(1, 2);
    assert.deepEqual(res, 3);
  });
});
