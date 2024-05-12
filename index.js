const axios = require("axios"); // legacy way

// Make a request for a user with a given ID
axios
  .get(
    "https://vt-bangladesh.uniclienttechnologies.com/api/v1/web/states?limit=10&page=1"
  )
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
