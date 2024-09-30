/* eslint-env node */

"use strict";

const path = require("path");

module.exports = function (/* env */) {
  return {
    clientAllowedKeys: ["EMBER_HOST", "API_HOST", "GUEST_USER_ID"],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), ".env"),
  };
};
