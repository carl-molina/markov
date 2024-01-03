"use strict";

const { MarkovMachine } = require("./markov");

describe("MarkovMachine instance methods", function () {

  let machine;

  beforeEach(function() {
    machine = new MarkovMachine("Testing this.");
  });

  test("return chain", function () {

    expect(machine.chains).toEqual(
      {
        "Testing": ["this."],
        "this.": [null],
      }
    )
  });

  test("getText instance method returns string", function() {
    expect(machine.getText()).toEqual(expect.any(String));
  })

  test("getText instance method is not empty", function() {
    expect(machine.getText().length).not.toEqual(0);
  })

  test("getText only includes words made from input", function() {
    const words = machine.getText().split(/[ \r\n]+/);

    for(const word of words) {
      expect(machine.words).toContain(word);
    }

  })

});