let swapCase = str => {
  return str.split('').map(chr => {
    return chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase();
  }).join('');
};

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"