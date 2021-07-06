let letterCaseCount = str => {
  let obj = {
    lowercase: str.match(/[a-z]/g),
    uppercase: str.match(/[A-Z]/g),
    neither: str.match(/[^a-z]/gi)
  };

  Object.keys(obj).forEach(key => {
    obj[key] = Array.isArray(obj[key]) ? obj[key].length : 0;
  });

  /* Simpler solution from answer:
    lowercase: str.match(/[a-z]/g) || [];
    uppercase: str.match(/[A-Z]/g) || [];
    neither: str.match(/[^a-z]/gi) || [];

    // and return object with values of property.length
  */

  return obj;
};

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }