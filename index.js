const fs = require("fs")

console.log(process.argv)

/*data del koder 
name
*/
let koders = fs.readFileSync("./koders.json", "utf8")
koders = JSON.parse(koders)
if (process.argv[2] === "add") {
    if (process.argv[3] !== "") {
        koders.push({ name: process.argv[3] })
        fs.writeFileSync("./koders.json", JSON.stringify(koders), "utf8")
    }
}

