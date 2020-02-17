function isOneEditString(string, checkString){
  if((checkString.length < string.length - 1) || 
  (checkString.length > string.length + 1)){
      return false;
    } 
  let editCounter = 0;
  for(let i=0; i < checkString.length; i++){
    if(!(string[i]==checkString[i])){
      editCounter++;
    }
  }
  return editCounter <= 1;
}

console.log(isOneEditString("banana","bananaaa"));
console.log(isOneEditString("banana","bana"));
console.log(isOneEditString("daniel","daniai"));
console.log(isOneEditString("banana","banena"));
console.log(isOneEditString("banana","bananaa"));
console.log(isOneEditString("banana","benen"));