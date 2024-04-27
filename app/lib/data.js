import { Product, User } from "./models"
import { connectToDB } from "./utils"


export const fetchUsers = async (q, page) => {

    const ITEM_PER_PAGE = 5
    const regex = new RegExp(q, 'i')
    try {
        connectToDB()
        const count = await User.find({username: {$regex: regex}}).count();
        const users = await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE);
        return {count, users}
    } catch(error) {
        console.error('Error fetching users: ', error)
    }
}
export const fetchProducts = async (q, page) => {

    const ITEM_PER_PAGE = 5
    const regex = new RegExp(q, 'i')
    try {
        connectToDB()
        const count = await Product.find({username: {$regex: regex}}).count();
        const products = await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE);
        return {count, products}
    } catch(error) {
        console.error('Error fetching users: ', error)
    }
}