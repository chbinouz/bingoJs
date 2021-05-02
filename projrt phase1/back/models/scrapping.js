const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ScrappingSchema = new schema({
  scrapReq: String,

  location: String,
});

var scrapping = mongoose.model("scrappingReq", ScrappingSchema);

module.exports = scrapping;
