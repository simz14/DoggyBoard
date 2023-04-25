export const fetchDogs = () => {
  const response = new Promise((res, rej) => {
    res([
      {
        id: 1,
        adopter: {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@example.com",
          phone: "555-555-5555",
          age: 30,
          reasonForAdopting: "I wanted a companion for my lonely days. ",
        },
        dog: {
          name: "Buddy",
          breed: "Golden Retriever",
          petId: "12345",
          age: 3,
          sex: "Male",
          color: "Blonde",
          size: "30 kg",
        },
      },
      {
        id: 2,
        adopter: {
          firstName: "Jane",
          lastName: "Smith",
          email: "janesmith@example.com",
          phone: "555-555-5556",
          age: 25,
          reasonForAdopting:
            "I have a family of 5 and we wanted a 6th member that can play with us and we can take care of him.",
        },
        dog: {
          name: "Max",
          breed: "German Shepherd",
          petId: "67890",
          age: 2,
          sex: "Male",
          color: "Black",
          size: "35 kg",
        },
      },
      {
        id: 3,
        adopter: {
          firstName: "Jennifer",
          lastName: "Doe",
          email: "jenndoe@example.com",
          phone: "855-585-5585",
          age: 25,
          reasonForAdopting: "I wanted a companion for my lonely days. ",
        },
        dog: {
          name: "Velfire",
          breed: "Dachshund",
          sex: "Male",
          age: 4,
          color: "Brown",
          size: "11kg",
          petId: 39983224,
        },
      },
      {
        id: 4,
        adopter: {
          firstName: "Mike",
          lastName: "Smith",
          email: "mikesmith@example.com",
          phone: "545-557-5556",
          age: 45,
          reasonForAdopting: "I fell in love with him.",
        },
        dog: {
          name: "Gilbert",
          breed: "Yorkshire Terrier",
          sex: "Female",
          age: 3,
          color: "Gray",
          size: "8kg",
          petId: 85983424,
        },
      },
      {
        id: 5,
        adopter: {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@example.com",
          phone: "555-555-5555",
          age: 30,
          reasonForAdopting: "I wanted a companion for my lonely days. ",
        },
        dog: {
          name: "Buddy",
          breed: "Golden Retriever",
          petId: "12345",
          age: 3,
          sex: "Male",
          color: "Blonde",
          size: "30 kg",
        },
      },
      {
        id: 6,
        adopter: {
          firstName: "Jane",
          lastName: "Smith",
          email: "janesmith@example.com",
          phone: "555-555-5556",
          age: 25,
          reasonForAdopting:
            "I have a family of 5 and we wanted a 6th member that can play with us and we can take care of him.",
        },
        dog: {
          name: "Max",
          breed: "German Shepherd",
          petId: "67890",
          age: 2,
          sex: "Male",
          color: "Black",
          size: "35 kg",
        },
      },
      {
        id: 7,
        adopter: {
          firstName: "Jennifer",
          lastName: "Doe",
          email: "jenndoe@example.com",
          phone: "855-585-5585",
          age: 25,
          reasonForAdopting: "I wanted a companion for my lonely days. ",
        },
        dog: {
          name: "Velfire",
          breed: "Dachshund",
          sex: "Male",
          age: 4,
          color: "Brown",
          size: "11kg",
          petId: 39983224,
        },
      },
      {
        id: 8,
        adopter: {
          firstName: "Mike",
          lastName: "Smith",
          email: "mikesmith@example.com",
          phone: "545-557-5556",
          age: 45,
          reasonForAdopting: "I fell in love with him.",
        },
        dog: {
          name: "Gilbert",
          breed: "Yorkshire Terrier",
          sex: "Female",
          age: 3,
          color: "Gray",
          size: "8kg",
          petId: 85983424,
        },
      },
    ]);
    return response;
  });
};
