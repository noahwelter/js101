function reverseWords(str) {
  const WORD_LENGTH = 5;

  return str.split(' ').map(val => {
    return (val.length >= WORD_LENGTH) ?
      val.split('').reverse().join('') :
      val;
  }).join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"