// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
  //remove whitespace to check character count
    const stripped = input.replace(/\s+/g, '');
    //return false if encode false & odd # of characters
    if(encode === false && stripped.length % 2 !== 0) return false
  
    //create an object with numerical values for all letters
    const encoder = {'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', '(i/j)': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'};
    //create an object with decoded number values
    const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z'};
    
    //check to see if encode is true or false to know which object to read from
    const result = encode ? encoder : decoder;
    
    return input.toLowerCase()
      //find two digit numbers or lower cased letters
      .match(/[0-9]{2}|[a-z]|\s/g)
      //take found characters and map the corresponding result from correct object
      .map(character => result[character] || character)
      //return a new string with the new characters
      .join('');    
   
  };

  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
