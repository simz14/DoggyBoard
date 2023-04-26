export const fetchFolders = () => {
  const response = new Promise((res, rej) => {
    res([
      {
        id: 1,
        name: "Dogs",
      },
      {
        id: 2,
        name: "Volunteer",
      },
      {
        id: 3,
        name: "Other",
      },
    ]);
  });
  return response;
};
