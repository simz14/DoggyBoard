export const fetchMedia = () => {
  const response = new Promise((res, rej) => {
    res([
      {
        id: 1,
        folderId: 1,
        src: "https://templatekit.tokomoo.com/adopkit/wp-content/uploads/sites/119/2023/02/dog-pic-03.jpg",
      },
      {
        id: 2,
        folderId: 1,
        src: "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/12/Cocker-Spaniel-Dog-Breed-Feature-Image.jpg",
      },
      {
        id: 3,
        folderId: 1,
        src: "https://img.freepik.com/premium-photo/small-cocker-spaniel-dog-with-beautiful-blonde-hair-green-grass_58409-24609.jpg?w=996",
      },

      {
        id: 4,
        folderId: 4,
        src: "https://mynextpuppy.com/wp-content/uploads/2021/06/2047466_800.jpg",
      },
      {
        id: 5,
        folderId: 4,
        src: "https://www.dachshundjoy.com/wp-content/uploads/2017/11/black-and-brown-shorthaired-doxie-puppy-curious-4056474887_352df12ed6_o-1200X612-OPT-984x502.jpg",
      },
      {
        id: 6,
        folderId: 4,
        src: "https://www.rover.com/blog/wp-content/uploads/2018/11/dachshund-1519374_1920.jpg",
      },
      {
        id: 7,
        folderId: 1,
        src: "https://www.about-cocker-spaniels.com/images/golden-cocker-spaniels-4.jpg",
      },
    ]);
  });
  return response;
};
