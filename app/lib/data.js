import { User } from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async () => {
    try {
        connectToDB()
        const users = User.find()
        return users
    } catch(error) {
        console.error('Error fetching users: ', error)
    }
}