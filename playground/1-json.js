const fs = require('fs')
    /*
    const book = {
        title: "Ego is the enemy",
        author: "Ryan holiday"
    }

    const bookJSON = JSON.stringify(book)
        /*
        console.log(bookJSON)

        const parsedata = JSON.parse(bookJSON)
        console.log(parsedata.author)
        */

//fs.writeFileSync('1-json.json', bookJSON) //writing data in new json  file
const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())