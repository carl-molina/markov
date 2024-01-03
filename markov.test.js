"use strict";

const { MarkovMachine } = require("./markov");

describe("MarkovMachine instance methods", function () {

  test("return chain", function () {
    let machine = MarkovMachine("Testing this.");

    expect(machine.chains).toEqual(
      {
        "Testing": ["this."],
        "this.": [null],
      }
    )
  });

  // test("getText instance method")

});