const mongoose = require("mongoose")

async function main() {
    try {

        mongoose.set("strictQuery", true)

        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.urtbfie.mongodb.net/?retryWrites=true&w=majority`
        )
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main