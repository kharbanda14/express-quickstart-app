const mongoose = require("mongoose");
const { logger } = require("express-quickstart-package");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.debug("DB connected");
    require("express-quickstart-package/providers/models");
  });
