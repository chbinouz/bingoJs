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
  getDevIt: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/profile?page=" + page;
      } else {
        url = "http://localhost:3001/profile?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getFront: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/front?page=" + page;
      } else {
        url = "http://localhost:3001/front?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getFullStack: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/fullstack?page=" + page;
      } else {
        url = "http://localhost:3001/fullstack?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getUx: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/ux?page=" + page;
      } else {
        url = "http://localhost:3001/ux?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getGraphic: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/graphic?page=" + page;
      } else {
        url = "http://localhost:3001/graphic?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getWeb: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/web?page=" + page;
      } else {
        url = "http://localhost:3001/web?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getVideo: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/video?page=" + page;
      } else {
        url = "http://localhost:3001/video?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getSem: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/sem?page=" + page;
      } else {
        url = "http://localhost:3001/sem?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getSeo: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/seo?page=" + page;
      } else {
        url = "http://localhost:3001/seo?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getMarketing: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/marketing?page=" + page;
      } else {
        url = "http://localhost:3001/marketing?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getMarket: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/market?page=" + page;
      } else {
        url = "http://localhost:3001/market?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getContent: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/content?page=" + page;
      } else {
        url = "http://localhost:3001/content?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getTranslators: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/translators?page=" + page;
      } else {
        url = "http://localhost:3001/translators?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getEditors: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/editors?page=" + page;
      } else {
        url = "http://localhost:3001/editors?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getCopy: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/copy?page=" + page;
      } else {
        url = "http://localhost:3001/copy?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getVirtual: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/virtual?page=" + page;
      } else {
        url = "http://localhost:3001/virtual?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getDataEntry: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/dataentry?page=" + page;
      } else {
        url = "http://localhost:3001/dataentry?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getProjectManagers: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/projectmanagers?page=" + page;
      } else {
        url = "http://localhost:3001/projectmanagers?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getTech: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/tech?page=" + page;
      } else {
        url = "http://localhost:3001/tech?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getAccountants: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/accountants?page=" + page;
      } else {
        url = "http://localhost:3001/accountants?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getFinancial: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/financial?page=" + page;
      } else {
        url = "http://localhost:3001/financial?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getTax: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/tax?page=" + page;
      } else {
        url = "http://localhost:3001/tax?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getFinancialModelers: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:3001/financialmodelers?page=" + page;
      } else {
        url = "http://localhost:3001/financialmodelers?page=0";
      }
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
};
