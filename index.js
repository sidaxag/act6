const fs = require("fs")



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


if (process.argv[2] === "ls") {
    koders.forEach((koder) => {
        console.log(koder.name)
    })
}

if (process.argv[2] === "rm") {
    if (process.argv[3] !== "") {
        let newListKoder = koders.filter((koder) => {
            return koder.name !== process.argv[3]
        })
        fs.writeFileSync("./koders.json", JSON.stringify(newListKoder), "utf8")
    }
}

if (process.argv[2] === "reset") {
    koders = []
    fs.writeFileSync("./koders.json", JSON.stringify(koders), "utf8")
}

