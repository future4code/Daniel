export const func = (
    source: string,
    comparision: string
  ): boolean => {
    if (
      comparision.length > source.length + 1 ||
      comparision.length < source.length - 1
    ) {
      return false;
    }
    let communCharQuantity = 0;
  
    for (const char of comparision) {
      if (source !== comparision) {
        communCharQuantity++;
      }
    }
    return (
      communCharQuantity <= source.length + 1 &&
      communCharQuantity >= source.length - 1
    );
  };

  /*

  Complexidade: O(n)


  */