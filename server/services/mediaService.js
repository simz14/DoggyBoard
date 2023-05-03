const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const uploadImage = async () => {
  upload.single("image");
};
