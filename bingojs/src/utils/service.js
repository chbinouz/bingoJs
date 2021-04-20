import axios from "axios";
// eslint-disable-next-line
export default {
  getList: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/profiles?page=" + page;
      } else {
        url = "http://localhost:3001/profiles?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getSearchedList: async function (page, req) {
    console.log(req);
    try {
      let url;

      url =
        "http://localhost:3001/profiles/search?page=" +
        page +
        "&profile_title=" +
        req.field +
        "&experience=" +
        req.experience +
        "&location=" +
        req.location;

      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
