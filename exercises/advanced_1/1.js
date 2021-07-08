let madlibs = template => {
  const WORDS = {
    noun: ['dog', 'cat', 'monster', 'dinosaur', 'truck'],
    verb: ['runs', 'walks', 'swims', 'eats', 'sleeps'],
    adjective: ['red', 'green', 'big', 'small', 'bright'],
    adverb: ['quickly', 'happily', 'sadly', 'sneakily', 'hardly']
  };

  let regex = new RegExp('{[a-z]*}', 'gi');

  return template.replace(regex, str => {
    let type = str.replace(/[{|}]/g, '');
    let index = Math.floor(Math.random() * WORDS[type].length);
    return WORDS[type][index];
  });
};

let template1 = `The {adjective} brown {noun} {adverb} {verb} the {adjective} yellow {noun}, who {adverb} {verb} his {noun} and looks around.`;
let template2 = `The {noun} {verb} the {noun}'s {noun}.`;

madlibs(template1);
madlibs(template1);
madlibs(template2);
madlibs(template2);
