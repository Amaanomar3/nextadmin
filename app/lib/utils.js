export const connectToDB = async () => {

    const  connection = {}
    try {
        if (connection.isConnected) {
            console.log('using existing database connection')
            return
        }
        const db = await mongoose.connect(process.env.MONGO_URI)
        connection.isConnected = await db.connections[0].readyState
    } catch(error) {
        console.error('Error connecting to the database: ', error)
    }
}