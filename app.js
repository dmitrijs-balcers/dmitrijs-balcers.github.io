const fs = require("fs");



fs.readFile("./layout.html", "utf8", (err, layout) => {
  if (err) {
    return console.error(err);
  }

  fs.readdir("./pages", (err, files) => {
    files.forEach(f => {
      fs.readFile(`./pages/${f}`, "utf8", (err, p) => {
        if (err) {
          return console.error(err);
        }

        const page = layout.replace("{{content}}", p);

        fs.writeFile(`./build/${f}`, page, (e) => e && console.error(e));
      })
    });
  });
});