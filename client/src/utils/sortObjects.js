export const sortObjects = (array, sort, asc) => {
  return array.sort((a, b) => {
    if (asc) {
      if (a[sort] < b[sort]) {
        return -1;
      }
      if (a[sort] > b[sort]) {
        return 1;
      }
      return 0;
    } else {
      if (a[sort] > b[sort]) {
        return -1;
      }
      if (a[sort] < b[sort]) {
        return 1;
      }
      return 0;
    }
  });
};
