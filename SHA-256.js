const crypto = require("crypto");

function hash(data) {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
}

const input = "Ashiq";
console.log(`Hash Input: ${input} || Hash Value: ${hash(input)}`);
