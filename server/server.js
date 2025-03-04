const http = require('http');
const app = require('../../../../../Redo/meks-hub/app');

require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer(app);

const appName = process.env.APP_NAME;
const appVersion = process.env.APP_VERSION;
const appDescription = process.env.APP_DESCRIPTION;
const appAuthor = process.env.APP_AUTHOR;
const appRepo = process.env.APP_REPO;
const appLicense = process.env.APP_LICENSE;

server.listen(port, host, () => {
  console.log("~".repeat(80));
  console.log("~ " + appName + " ~");
  console.log("~ Version: " + appVersion);
  console.log("~ Description: " + appDescription);
  console.log("~ Author: " + appAuthor);
  console.log("~ Repo: " + appRepo);
  console.log("~ License: " + appLicense);
  console.log("~".repeat(80));
  console.log(`Server is running at http://${host}:${port}`);
  console.log("~".repeat(80));
});
