export const sortAfterChosenCurrency = (array : string[], chosenCurrency: string) => {
    const sorter = (a : string, b : string) =>{
      if(a === chosenCurrency) {
        return -1;
      } else {
        return 1;
      }
    }
    return array.sort(sorter);
  }