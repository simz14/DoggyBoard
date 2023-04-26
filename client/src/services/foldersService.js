export const fetchFolders = () => {
  const response = new Promise((res, rej) => {
    res([
      {
        id: 1,
        name: "Mei Mei",
      },
      {
        id: 2,
        name: "Gilbert",
      },
      {
        id: 3,
        name: "Puppy Back",
      },
      {
        id: 4,
        name: "Spencer",
      },
      {
        id: 5,
        name: "Volunteer",
      },
      {
        id: 6,
        name: "Other",
      },
    ]);
  });
  return response;
};
