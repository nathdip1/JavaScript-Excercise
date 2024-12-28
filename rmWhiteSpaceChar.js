function removeWhiteSpaceChar(str){
    return str.replace(/\s/g,"");
  }
  
  const stringWithWhiteSpace = " Hello   \t\nWorld ";
  const stringWithoutWhiteSpace = removeWhiteSpaceChar(stringWithWhiteSpace);
  console.log(stringWithoutWhiteSpace);
  