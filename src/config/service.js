const multer = require("multer");
const image_path = "C:/wamp64/www/image_path/react_node_mysql_image";

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, image_path);
    },
  }),

  limits: {
    fileSize: 1024 * 1024 * 3, // 3MB
  },
});

module.exports = { upload };
