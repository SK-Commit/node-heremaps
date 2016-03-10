export default {
  ACCEPTED_CONFIG_KEYS: {
    app_id: "string",
    app_code: "string"
  },
  ACCEPTED_PARAMS: {
    geocode: {
      searchtext: "string"
    },
    matrixRouting: {
      start0: "string",
      start1: "string",
      start2: "string",
      start3: "string",
      start4: "string",
      start5: "string",
      destination0: "string",
      destination1: "string",
      destination2: "string",
      destination3: "string",
      destination4: "string",
      destination5: "string",
      mode: "string",
      summaryAttributes: "string"
    }
  },
  HEREMAPS_ENDPOINTS: {
    geocode: "https://geocoder.api.here.com/6.2/geocode.json",
    matrixRouting: "https://route.api.here.com/routing/7.2/calculatematrix.json"
  }
};