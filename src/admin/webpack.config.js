// ./src/admin/webpack.config.js
const path = require("path");
("use strict");

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  // config.plugins.push(
  //   new webpack.DefinePlugin({
  //     HOST_URL: JSON.stringify(process.env.HOST_URL),
  //   })
  // );

  return config;
};
