getCountryCode = function(countryName) {
  var code;
  switch (countryName) {
    case "India":
      code = 10;
      break;
  }

  return code;
};

module.exports.getCountryCode = getCountryCode;
