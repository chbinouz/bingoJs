const mongoose = require("mongoose");
const schema = mongoose.Schema;

const folderSchema = new schema({
    name: {
        type: String // t lower case fix it in other files!!!
    }
}, {
    timestamps: true
});

const Folder = mongoose.model("folder", folderSchema);
module.exports = Folder;
