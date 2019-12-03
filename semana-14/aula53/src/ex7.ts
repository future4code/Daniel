function reverseString(string:string):string{
    return string.split('').reverse().join('');
}

console.log(reverseString("racecar"));
console.log(reverseString("Daniel"));