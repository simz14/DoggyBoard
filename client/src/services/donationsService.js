export const fetchDonations = () => {
  const response = new Promise((res, rej) => {
    res([
      {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        phone: "202-555-0117",
        amount: "50",
      },
      {
        id: 2,
        firstName: "Erica",
        lastName: "Johnson",
        phone: "202-555-0139",
        amount: "100",
      },
      {
        id: 3,
        firstName: "Jeffrey",
        lastName: "Clarkson",
        phone: "+1-202-555-0117",
        amount: "50",
      },
      {
        id: 4,
        firstName: "Martin",
        lastName: "Star",
        phone: "202-555-0136",
        amount: "500",
      },
      {
        id: 5,
        firstName: "Jack",
        lastName: "Marley",
        phone: "202-555-0117",
        amount: "50",
      },
      {
        id: 6,
        firstName: "Mattew",
        lastName: "Smith",
        phone: "202-555-0139",
        amount: "200",
      },
      {
        id: 7,
        firstName: "John",
        lastName: "Smith",
        phone: "202-555-0117",
        amount: "250",
      },
      {
        id: 8,
        firstName: "John",
        lastName: "Smith",
        phone: "202-555-0117",
        amount: "50",
      },
      {
        id: 9,
        firstName: "Erica",
        lastName: "Johnson",
        phone: "202-555-0139",
        amount: "100",
      },
      {
        id: 10,
        firstName: "Jeffrey",
        lastName: "Clarkson",
        phone: "+1-202-555-0117",
        amount: "50",
      },
      {
        id: 11,
        firstName: "Martin",
        lastName: "Star",
        phone: "202-555-0136",
        amount: "500",
      },
      {
        id: 12,
        firstName: "Jack",
        lastName: "Marley",
        phone: "202-555-0117",
        amount: "50",
      },
      {
        id: 13,
        firstName: "Mattew",
        lastName: "Smith",
        phone: "202-555-0139",
        amount: "200",
      },
      {
        id: 14,
        firstName: "John",
        lastName: "Smith",
        phone: "202-555-0117",
        amount: "250",
      },
    ]);
  });
  return response;
};
