const findFirstRecurringCharacter = (input: string): string | null => {
    const charHashMap: { [index: string]: boolean } = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  };

/*

Complexidade: O(n)


*/