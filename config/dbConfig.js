const { default: mongoose } = require("mongoose");

function dbConfig() {
    mongoose.connect(process.env.DBURL).then(()=> {
       console.log("Database is connected") 
    }).catch(() => {
        console.log("Database connection error")
    })
}
module.exports = dbConfig;