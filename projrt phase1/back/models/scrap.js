const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ScrappingSchema = new schema(
  {
    scrapReq: {
      type: String,
      unique: true,
    },

    location: String,
  },
  {
    timestamps: true,
  }
);

var scrapping = mongoose.model("scrapping", ScrappingSchema);

module.exports = scrapping;
