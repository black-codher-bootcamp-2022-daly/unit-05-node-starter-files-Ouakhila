var fs = require("fs");

const log = {
  info: function (msg) {
    console.info(msg);
  },
  write: function (msg) {
    fs.writeFile("log.txt", msg, function (err, data) {
      if (err) {
        console.error(`Failed to write data!: '${data}'\n`);
        return console.error(err);
      }
    });
  },
};
module.exports = log;
