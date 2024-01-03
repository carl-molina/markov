"use strict";

/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains(this.words);
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains(words) {

    const chainObj = {};
    // TODO: can call this 'chains', don't add data type to naming conv

    for (let i = 0; i < words.length; i++) {
      // TODO: use 'this.words' instead of words.length
      if (!(words[i] in chainObj)) {
        if (words[i+1] === undefined) {
          chainObj[words[i]] = [null];
          continue;
  // TODO: can check curr word and next word before going through conditionals
        }
        chainObj[words[i]] = [words[i+1]];
      }
      else {
        if (words[i+1] === undefined) {
          chainObj[words[i]].push(null);
          continue;
        }
        chainObj[words[i]].push(words[i+1]);
      }
    }

    return chainObj;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let text = this.words[0];
    let word = text;

    // console.log('This is this.chains', this.chains);
    // console.log('This is text', text);
    // console.log('This is word', word);

    while (word !== null) {
      // console.log('Entering the while loop');
      // console.log('This is word in while loop', word);
      const nextWords = this.chains[word];
      // console.log('This is nextWords', nextWords);

      // random num generator to get randIdx for arr of words
      // Math.floor(Math.random() * (max - min + 1) + min)
      // NOTE: removing + 1 in randIdx resolved undefined bug issue
      const randIdx = Math.floor(Math.random() * (nextWords.length));
      const pickedWord = nextWords[randIdx];
      // TODO: ^ randomizer might be better as a helper function instead here

      if (pickedWord === null) {
        return text;
      }

      text += " " + pickedWord;
      // TODO: ^ consider initializing an empty array first and then join at end

      word = pickedWord;
    }
  }
}

module.exports = {
  MarkovMachine,
};
