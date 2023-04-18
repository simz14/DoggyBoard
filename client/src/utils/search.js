export const search = (toFilter, searchValue) => {
  if (!searchValue) {
    return toFilter;
  } else {
    return toFilter.filter((obj) => {
      const objValues = Object.values(obj).map((value) =>
        String(value).toLowerCase()
      );
      const search = String(searchValue).toLowerCase();
      return objValues.some((value) => value.includes(search));
    });
  }
};
