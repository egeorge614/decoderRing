// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
   
    //function to make sure characters in string are unique
      function isUnique(str) {
  return new Set(str).size == str.length;
}
   //check if alphabet is preset, 26 characters, and has all unique characters
    if(!alphabet || alphabet.length != 26 || isUnique(alphabet) === false) return false
    
    //create an ojbect for encoded replacement alphabet values
    let encoder = {
      a : alphabet.charAt(0),
      b : alphabet.charAt(1),
      c : alphabet.charAt(2),
      d : alphabet.charAt(3),
      e : alphabet.charAt(4),
      f : alphabet.charAt(5),
      g : alphabet.charAt(6),
      h : alphabet.charAt(7),
      i : alphabet.charAt(8),
      j : alphabet.charAt(9),
      k : alphabet.charAt(10),
      l : alphabet.charAt(11),
      m : alphabet.charAt(12),
      n : alphabet.charAt(13),
      o : alphabet.charAt(14),
      p : alphabet.charAt(15),
      q : alphabet.charAt(16),
      r : alphabet.charAt(17),
      s : alphabet.charAt(18),
      t : alphabet.charAt(19),
      u : alphabet.charAt(20),
      v : alphabet.charAt(21),
      w : alphabet.charAt(22),
      x : alphabet.charAt(23),
      y : alphabet.charAt(24),
      z : alphabet.charAt(25)
  }
    //create an object for decoded replacement alphabet values
     const decoder = Object.fromEntries(Object.entries(encoder).map(a => a.reverse()))    
  
    //check to see if encode is true or false to know which object to read from
    const result = encode ? encoder : decoder;
    
    return input.toLowerCase()
      //find matching character
      .match(/\W+|[a-z]|/g)
      //take found characters and map the corresponding result from correct object
      .map(character => result[character] || character)
      //return a new string with the new characters
      .join('');    
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
