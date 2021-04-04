import axios from "axios";
// eslint-disable-next-line
export default {
  getList: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3000/profiles?page=" + page;
      } else {
        url = "http://localhost:3000/profiles?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
