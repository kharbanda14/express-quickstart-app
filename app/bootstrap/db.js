const mongoose = require("mongoose");
const { logger } = require("express-quickstart-framework");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.debug("DB connected");
    require("express-quickstart-framework/providers/models");
  });
