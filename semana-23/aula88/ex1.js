function firstRecurrChar(string){
    const lowerString = string.toLowerCase();
    for(i=0;i < lowerString.length;i++){
      const index = lowerString.indexOf(lowerString[i],i + 1 );
      if(index > 0){
        return string[i];
      }
  
    }
    return null;
  }
  
  console.log(firstRecurrChar("VISCONDES"));
  console.log(firstRecurrChar("BCABA"));
  console.log(firstRecurrChar("ABC"));
  console.log(firstRecurrChar("Amanda"));