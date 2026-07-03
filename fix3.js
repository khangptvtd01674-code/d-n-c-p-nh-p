const fs = require("fs");
let code = fs.readFileSync("app.js", "utf8");

code = code.replace(/j\.companyName === user\.companyName/g, "(j.companyId === user.companyId || j.companyName === user.companyName)");

fs.writeFileSync("app.js", code, "utf8");
console.log("Success");
