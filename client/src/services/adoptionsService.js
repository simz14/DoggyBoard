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
        status: "pending",
        date: "1674809976000",
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
        status: "approved",
        date: "1674809976000",
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
        status: "pending",
        date: "1674809976000",
      },
      {
        id: 4,
        firstName: "Mike",
        lastName: "Smith",
        email: "mikesmith@example.com",
        phone: "545-557-5556",
        age: 45,
        reasonForAdopting: "I fell in love with him.",
        petId: 11183424,
        status: "declined",
        date: "1674809976000",
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
        status: "pending",
        date: "1674809976000",
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
        status: "declined",
        date: "1674809976000",
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
        status: "approved",
        date: "1677488376000",
      },
      {
        id: 8,
        firstName: "Mike",
        lastName: "Smith",
        email: "mikesmith@example.com",
        phone: "545-557-5556",
        age: 45,
        reasonForAdopting: "I fell in love with her.",
        petId: 85923424,
        status: "approved",
        date: "1674809976000",
      },
      {
        id: 9,
        firstName: "Kloe",
        lastName: "Doe",
        email: "Kloe@example.com",
        phone: "755-985-545",
        age: 25,
        reasonForAdopting: "I wanted a companion for my lonely days. ",
        petId: 25973423,
        status: "approved",
        date: "1679907576000",
      },
      {
        id: 10,
        firstName: "Daniel",
        lastName: "McDonald",
        email: "Daniel@example.com",
        phone: "111-557-5556",
        age: 45,
        reasonForAdopting: "I fell in love with her.",
        petId: 11183424,
        status: "approved",
        date: "1679907576000",
      },
    ]);
  });
  return response;
};
