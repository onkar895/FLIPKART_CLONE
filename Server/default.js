import Product from './Models/ProductSchema.js'
import { products } from './Constant/data.js'

const DefaultData = async () => {
    try {
        await Product.insertMany(products)
        console.log("Data imported successfully");
    } catch (error) {
        console.log(error, 'error while inserting default data');
    }
}

export default DefaultData;