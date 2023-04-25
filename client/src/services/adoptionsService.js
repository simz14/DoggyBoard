export const fetchAdoptions = () => {
  const response = new Promise((res, rej) => {
    res([
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phone: "555-555-5555",
        age: 30,
        reasonForAdopting: "I wanted a companion for my lonely days. ",
        petId: 39983224,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        phone: "555-555-5556",
        age: 25,
        reasonForAdopting:
          "I have a family of 5 and we wanted a 6th member that can play with us and we can take care of him.",
        petId: 85983424,
      },
      {
        id: 3,
        firstName: "Jennifer",
        lastName: "Doe",
        email: "jenndoe@example.com",
        phone: "855-585-5585",
        age: 25,
        reasonForAdopting: "I wanted a companion for my lonely days. ",
        petId: 36473424,
      },
      {
        id: 4,
        firstName: "Mike",
        lastName: "Smith",
        email: "mikesmith@example.com",
        phone: "545-557-5556",
        age: 45,
        reasonForAdopting: "I fell in love with him.",
        petId: 85936145,
      },
      {
        id: 5,

        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phone: "555-555-5555",
        age: 30,
        reasonForAdopting: "I wanted a companion for my lonely days. ",
        petId: 85234524,
      },
      {
        id: 6,
        firstName: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        phone: "555-555-5556",
        age: 25,
        reasonForAdopting:
          "I have a family of 5 and we wanted a 6th member that can play with us and we can take care of him.",
        petId: 25973423,
      },
      {
        id: 7,
        firstName: "Jennifer",
        lastName: "Doe",
        email: "jenndoe@example.com",
        phone: "855-585-5585",
        age: 25,
        reasonForAdopting: "I wanted a companion for my lonely days. ",
        petId: 85983555,
      },
      {
        id: 8,
        firstName: "Mike",
        lastName: "Smith",
        email: "mikesmith@example.com",
        phone: "545-557-5556",
        age: 45,
        reasonForAdopting: "I fell in love with her.",
        petId: 11183424,
      },
    ]);
  });
  return response;
};
